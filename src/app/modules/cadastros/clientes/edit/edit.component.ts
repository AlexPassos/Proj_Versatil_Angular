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

import { ClienteModel } from '../model/cliente-model';
import { ClientesService } from './../service/clientes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  @Output() btnVoltar = new EventEmitter<string>();

  formulario!: FormGroup;
  frm$!: Observable<ClienteModel>;
  bSalvar = false;

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm(this.clientesService.getCliente());
  }

  ngOnDestroy(): void {
    //aa
  }

  createForm = (clienteModel: ClienteModel): void => {

    clienteModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [clienteModel.id],
      datacad: [clienteModel.datacad, Validators.required],
      tipo: [clienteModel.tipo, Validators.required],
      situacao: [clienteModel.situacao, Validators.required],
      nome: [clienteModel.nome, Validators.required],
      sexo: [clienteModel.sexo],
      nascimento: [clienteModel.nascimento],
      civil: [clienteModel.civil],
      profissaoID: [clienteModel.profissaoID],
      fantasia: [clienteModel.fantasia],
      rgie: [clienteModel.rgie],
      orgaoemissor: [clienteModel.orgaoemissor],
      dataemissao: [clienteModel.dataemissao],
      cpfcnpj: [
        clienteModel.cpfcnpj,
        { Validators: Validators.required, updateOn: 'blur' },
      ],
      sitlimite: [clienteModel.sitlimite],
      limite: [clienteModel.limite],
      endereco: [clienteModel.endereco],
      numero: [clienteModel.numero],
      complemento: [clienteModel.complemento],
      bairro: [clienteModel.bairro],
      cidadeID: [clienteModel.cidadeID],
      ufID: [clienteModel.ufID],
      cep: [clienteModel.cep],
      telefone: [clienteModel.telefone],
      celularfax: [clienteModel.celularfax],
      email: [clienteModel.email],
      obs: [clienteModel.obs],
      cod: [clienteModel.cod],
      empresaID: [clienteModel.empresaID],
    });

      this.formulario.controls['fantasia'].disable();
      this.formulario.controls['limite'].disable();

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

      if(this.formulario.controls['sitlimite'].value == false){
        this.formulario.controls['limite'].disable();
      } else {
        this.formulario.controls['limite'].enable();
      }

      if (this.formulario.controls['tipo'].value == 1) {
        this.formulario.controls['fantasia'].disable();
        this.formulario.controls['orgaoemissor'].enable();
        this.formulario.controls['dataemissao'].enable();
        this.formulario.controls['nascimento'].enable();
        this.formulario.controls['sexo'].enable();
        this.formulario.controls['profissaoID'].enable();
        this.formulario.controls['civil'].enable();
      } else {
        this.formulario.controls['fantasia'].enable();
        this.formulario.controls['orgaoemissor'].disable();
        this.formulario.controls['dataemissao'].disable();
        this.formulario.controls['nascimento'].disable();
        this.formulario.controls['sexo'].disable();
        this.formulario.controls['profissaoID'].disable();
        this.formulario.controls['civil'].disable();
      }

  }

  onSubmit(): void {
    //console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.clientesService
        .updateCliente(this.formulario.value)
        .subscribe({
          next: (dados) => {

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
            this.createForm(new ClienteModel());
            setTimeout(() => {
              this.btnVoltar.emit('list');
            }, 1000);
          },
        });
    }
  }

}
