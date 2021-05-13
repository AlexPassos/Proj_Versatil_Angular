import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { GruposService } from './../../service/grupos.service';

@Component({
  selector: 'app-edit-grupo',
  templateUrl: './edit-grupo.component.html',
  styleUrls: ['./edit-grupo.component.css']
})
export class EditGrupoComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  formulario!: FormGroup;
  retorno!: string;

  constructor(
    private formBuilder: FormBuilder,
    private gruposService: GruposService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm(this.gruposService.getGrupo());
  }

  createForm = (grupoModel: ContasGruposModel): void => {

    grupoModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [grupoModel.id],
      contasdemonstrativosID: [grupoModel.contasdemonstrativosID],
      codigo: [grupoModel.codigo],
      nome: [grupoModel.nome, Validators.required],
      caixa: [grupoModel.caixa],
      lucro: [grupoModel.lucro],
      empresaID: [grupoModel.empresaID],
    });
  };

  getErrorMessage() {
    if (this.formulario.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formulario.hasError('descricao') ? 'Not a valid' : '';
  }

  botaoVoltar(value: string): void {
    this.trocaTela.next(value);
  }

  async onSubmit() {

    if (this.formulario.valid) {
      this.gruposService.updateGrupo(this.formulario.value).subscribe({
        next: (dados) => {
          this.retorno = dados;
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
          this.createForm(new ContasGruposModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
