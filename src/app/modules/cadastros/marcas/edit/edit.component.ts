import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { MarcaModel } from '../model/marca-model';
import { MarcasService } from './../service/marcas.service';

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
    private marcaService: MarcasService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.createForm(this.marcaService.getMarca());
  }

  createForm = (marcaodel: MarcaModel): void => {
    this.formulario = this.formBuilder.group({
      id: [marcaodel.id],
      descricao: [marcaodel.descricao, Validators.required],
      empresaID: [marcaodel.empresaID]
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
      this.marcaService.updateMarca(this.formulario.value).subscribe({
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
          this.createForm(new MarcaModel());

          setTimeout(() => {
            this.btnVoltar.emit('list');
          }, 500);
        },
      });
    }
  }

}
