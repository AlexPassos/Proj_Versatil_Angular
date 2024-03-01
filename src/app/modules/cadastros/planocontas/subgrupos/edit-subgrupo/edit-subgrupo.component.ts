import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from '../../model/contassubgrupos-model';
import { GruposService } from './../../service/grupos.service';
import { SubgruposService } from './../../service/subgrupos.service';

@Component({
  selector: 'app-edit-subgrupo',
  templateUrl: './edit-subgrupo.component.html',
  styleUrls: ['./edit-subgrupo.component.css']
})
export class EditSubgrupoComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  formulario!: UntypedFormGroup;
  retorno!: string;
  codigo!: number;

  listGrupos: ContasGruposModel[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private gruposService: GruposService,
    private subgruposService: SubgruposService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.listarGrupos();
    this.createForm(this.subgruposService.getSubgrupo());
  }

  createForm = (subgrupoModel: ContasSubgruposModel): void => {

    this.formulario = this.formBuilder.group({
      id: [subgrupoModel.id],
      contasdemonstrativosID: [subgrupoModel.contasdemonstrativosID],
      contasgruposID: [subgrupoModel.contasgruposID, Validators.required],
      codigo: [subgrupoModel.codigo],
      nome: [subgrupoModel.nome, Validators.required],
      caixa: [subgrupoModel.caixa],
      lucro: [subgrupoModel.lucro],
      empresaID: [subgrupoModel.empresaID],
    });
  };

  listarGrupos(): void {
    this.gruposService.listGrupos().subscribe(
       dados => {
        this.listGrupos = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      error => {
        console.log("Error: ", error);
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

  onSubmit() {
    this.salvar();
  }

  salvar(){
    if (this.formulario.valid) {
      this.subgruposService.updateSubgrupo(this.formulario.value).subscribe({
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
          this.createForm(new ContasSubgruposModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
