import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { PlanocontasService } from './../../service/planocontas.service';
import { GruposService } from './../../service/grupos.service';

@Component({
  selector: 'app-create-grupo',
  templateUrl: './create-grupo.component.html',
  styleUrls: ['./create-grupo.component.css'],
})
export class CreateGrupoComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  formulario!: UntypedFormGroup;
  retorno!: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private planocontasService: PlanocontasService,
    private gruposService: GruposService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm(new ContasGruposModel());
  }

  createForm = (grupoModel: ContasGruposModel): void => {
    grupoModel.contasdemonstrativosID = 1;
    grupoModel.caixa = true;
    grupoModel.lucro = false;
    grupoModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [null],
      contasdemonstrativosID: [grupoModel.contasdemonstrativosID],
      codigo: [grupoModel.codigo],
      nome: [grupoModel.nome, Validators.required],
      caixa: [grupoModel.caixa],
      lucro: [grupoModel.lucro],
      empresaID: [grupoModel.empresaID],
    });
  };

  maxCodigo() {
    this.gruposService.maxCodigo(1).subscribe(
      (data) => {
        //console.log('Retorno: ', data[0]);
        this.formulario.controls['codigo'].setValue( data[0]);
        this.salvar();
      },
      (error) => {
        console.log('Erro: ', error);
      }
    );
  }

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
   await this.maxCodigo();
  }

  salvar(){
    if (this.formulario.valid) {
      this.gruposService.addGrupo(this.formulario.value).subscribe({
        next: (dados) => {
          this.retorno = dados;
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
          this.createForm(new ContasGruposModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }
}
