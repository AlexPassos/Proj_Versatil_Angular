import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { SetorModel } from '../model/setor-model';
import { SetoresService } from './../service/setores.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() btnVoltar = new EventEmitter<string>();

  formulario!: UntypedFormGroup;
  retorno!: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private setoresService: SetoresService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.createForm(this.setoresService.getSetor());
  }

  createForm = (setorModel: SetorModel): void => {
    this.formulario = this.formBuilder.group({
      id: [setorModel.id],
      descricao: [setorModel.descricao, Validators.required],
      empresaID: [setorModel.empresaID]
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
      this.setoresService.updateSetor(this.formulario.value).subscribe({
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
          this.createForm(new SetorModel());

          setTimeout(() => {
            this.btnVoltar.emit('list');
          }, 500);
        },
      });
    }
  }

}
