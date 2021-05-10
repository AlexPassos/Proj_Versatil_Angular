import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { of, Observable } from 'rxjs';

import { ColaboradorModel } from '../model/colaborador-model';
import { ColaboradoresService } from './../service/colaboradores.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit, OnDestroy {
  @Output() btnVoltar = new EventEmitter<string>();

  formulario!: FormGroup;
  frm$!: Observable<ColaboradorModel>;
  bSalvar = false;

  constructor(
    private formBuilder: FormBuilder,
    private colaboradoresService: ColaboradoresService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm(new ColaboradorModel());
  }

  ngOnDestroy(): void {
    //aa
  }

  createForm = (colaboradorModel: ColaboradorModel): void => {
    colaboradorModel.data = new Date();
    colaboradorModel.situacao = true;
    colaboradorModel.salario = 0;
    colaboradorModel.acesso = false;
    colaboradorModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [null],
      data: [colaboradorModel.data, Validators.required],
      situacao: [colaboradorModel.situacao, Validators.required],
      nome: [colaboradorModel.nome, Validators.required],
      cargo: [colaboradorModel.cargo],
      nascimento: [colaboradorModel.nascimento],
      rg: [colaboradorModel.rg],
      cpf: [
        colaboradorModel.cpf,
        { Validators: Validators.required, updateOn: 'blur' },
      ],
      carteira: [colaboradorModel.carteira],
      pis: [colaboradorModel.pis],
      titulo: [colaboradorModel.titulo],
      habilitacao: [colaboradorModel.habilitacao],
      reservista: [colaboradorModel.reservista],
      filiacao: [colaboradorModel.filiacao],
      admissao: [colaboradorModel.admissao],
      demissao: [colaboradorModel.demissao],
      salario: [colaboradorModel.salario],
      endereco: [colaboradorModel.endereco],
      numero: [colaboradorModel.numero],
      complemento: [colaboradorModel.complemento],
      bairro: [colaboradorModel.bairro],
      cidadeID: [colaboradorModel.cidadeID],
      ufID: [colaboradorModel.ufID],
      cep: [colaboradorModel.cep],
      telefone: [colaboradorModel.telefone],
      celular: [colaboradorModel.celular],
      email: [colaboradorModel.email],
      obs: [colaboradorModel.obs],
      empresaID: [colaboradorModel.empresaID],
      nivel: [colaboradorModel.nivel],
      login: [colaboradorModel.login],
      senha: [colaboradorModel.senha],
      acesso: [colaboradorModel.acesso],
    });

      this.formulario.controls['nivel'].disable();
      this.formulario.controls['login'].disable();
      this.formulario.controls['senha'].disable();

  };

  getErrorMessage() {
    if (this.formulario.hasError('required')) {
      return 'You must enter a value';
    }
    return this.formulario.hasError('descricao') ? 'Not a valid' : '';
  }

  botaoVoltar(value: string): void {
    this.btnVoltar.emit(value);
  }

  verificaCPF(cpf: string) {
    if (cpf != null && cpf !== '') {
      this.bSalvar = false;
      this.frm$ = this.colaboradoresService.cpfColaborador(cpf);
      this.frm$.subscribe((item) => {
        //console.log(item);
        this.updateForm(item, cpf);
      });

      // this.colaboradoresService.cpfColaborador(cpf)
      //  .subscribe(
      //     (data) => {
      //       console.log("dt1", JSON.stringify(data));
      //       console.log("dt2", data);
      //       console.log("dt3", data[0]);

      //       //frm!: ColaboradorModel; DECLARADO ASSIM
      //       //this.frm =data;

      //       //this.formulario.patchValue(data);

      //       console.log("formulario", this.formulario);
      //       console.log("frm", this.frm);
      //       console.log("nome ", this.frm["nome"]);

      //      //this.createForm(this.frm);
      //       //this.formulario.controls['nome'].patchValue(data['nome']);
      //     },
      //     (error) => {
      //       console.log("err", error);
      //       //this.createForm(new ColaboradorModel());
      //     }
      //   );
    }
  }

  updateForm(dados: any, cpf: string) {

    if (dados.length > 0) {
      this.formulario.patchValue(dados[0]);
      this.bSalvar = true;
      this.messageService.add({
        key: 'bc',
        severity: 'warn',
        summary: 'Atenção',
        detail: 'CPF já cadastrado.',
      });

      //console.log(this.formulario.controls['acesso'].value);
      if(this.formulario.controls['acesso'].value == false){
        this.formulario.controls['nivel'].disable();
        this.formulario.controls['login'].disable();
        this.formulario.controls['senha'].disable();
      } else {
        this.formulario.controls['nivel'].enable();
        this.formulario.controls['login'].enable();
        this.formulario.controls['senha'].enable();
      }

    } else {
      this.createForm(new ColaboradorModel());
      this.formulario.patchValue({cpf: cpf, acesso: false});

      //console.log(this.formulario.controls['acesso'].value);
      this.formulario.controls['nivel'].setValue("");
      this.formulario.controls['nivel'].disable();
      this.formulario.controls['login'].disable();
      this.formulario.controls['senha'].disable();
    }
  }

  onSubmit(): void {
    //console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.colaboradoresService
        .addColaborador(this.formulario.value)
        .subscribe({
          next: (dados) => {
            //this.retorno = dados;
            //console.log(this.retorno);

            this.messageService.add({
              key: 'bc',
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Cadastro realizado com sucesso!',
            });
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            //console.log('Completo');

            //Limpando o formulário
            this.createForm(new ColaboradorModel());
            setTimeout(() => {
              this.btnVoltar.emit('list');
            }, 1000);
          },
        });
    }
  }
}
