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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, OnDestroy {
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
    this.createForm(this.colaboradoresService.getColaborador());
  }

  ngOnDestroy(): void {
    //aa
  }

  createForm = (colaboradorModel: ColaboradorModel): void => {
    colaboradorModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [colaboradorModel.id],
      data: [colaboradorModel.data, Validators.required],
      situacao: [colaboradorModel.situacao, Validators.required],
      nome: [colaboradorModel.nome, Validators.required],
      cargo: [colaboradorModel.cargo],
      nascimento: [colaboradorModel.nascimento],
      rg: [colaboradorModel.rg],
      cpf: [colaboradorModel.cpf],
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

    this.updateForm();

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

  updateForm() {
    //console.log(this.formulario.controls['acesso'].value);
    if (this.formulario.controls['acesso'].value == false) {
      this.formulario.controls['nivel'].disable();
      this.formulario.controls['login'].disable();
      this.formulario.controls['senha'].disable();
    } else {
      this.formulario.controls['nivel'].enable();
      this.formulario.controls['login'].enable();
      this.formulario.controls['senha'].enable();
    }
  }

  onSubmit(): void {
    //console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.colaboradoresService
        .updateColaborador(this.formulario.value)
        .subscribe({
          next: (dados) => {
            //this.retorno = dados;
            //console.log(this.retorno);

            this.messageService.add({
              key: 'bc',
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Operação realizado com sucesso!',
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
