import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { BancoModel } from '../model/banco-model';
import { BancosService } from './../service/bancos.service';

@Component({
  selector: 'app-edit-banco',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() btnVoltar = new EventEmitter<string>();

  formulario!: FormGroup;
  retorno!: string;

  constructor(
    private formBuilder: FormBuilder,
    private bancoService: BancosService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.createForm(this.bancoService.getBanco());
  }

  createForm = (bancoModel: BancoModel): void => {
    this.formulario = this.formBuilder.group({
      id: [bancoModel.id],
      descricao: [bancoModel.descricao, Validators.required],
      empresaID: [bancoModel.empresaID]
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
      this.bancoService.updateBanco(this.formulario.value).subscribe({
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
          this.createForm(new BancoModel());

          setTimeout(() => {
            this.btnVoltar.emit('list');
          }, 500);
        },
      });
    }
  }

}
