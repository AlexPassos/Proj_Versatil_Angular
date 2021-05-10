import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { ServicoModel } from '../model/servico-model';
import { ServicosService } from './../service/servicos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() btnVoltar = new EventEmitter<string>();

  formulario!: FormGroup;
  retorno!: string;

  constructor(
    private formBuilder: FormBuilder,
    private servicosService: ServicosService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.createForm(this.servicosService.getServico());
  }

  createForm = (servicoModel: ServicoModel): void => {
    this.formulario = this.formBuilder.group({
      id: [servicoModel.id],
      descricao: [servicoModel.descricao, Validators.required],
      valor: [servicoModel.valor, Validators.required],
      empresaID: [servicoModel.empresaID]
    });
  }

  getErrorMessage() {
    if (this.formulario.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formulario.hasError('descricao') ? 'Not a valid' : '';
  }

  botaoVoltar(value: string): void{
    this.btnVoltar.emit(value);
  }

  onSubmit(): void{
    //console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.servicosService.updateServico(this.formulario.value).subscribe({
        next: (dados) => {
          this.retorno = dados;
          //console.log(this.retorno);

          this.messageService.add({
            key: 'bc',
            severity: 'success',
            summary: 'Success',
            detail: 'Operação realizada com sucesso!',
          });
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          //console.log('Completo');

          //Limpando o formulário
          this.createForm(new ServicoModel());

          setTimeout(() => {
            this.btnVoltar.emit('list');
          }, 500);
        },
      });
    }
  }

}
