import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from '../../model/contassubgrupos-model';
import { ContasModel } from '../../model/contas-model';
import { GruposService } from './../../service/grupos.service';
import { SubgruposService } from './../../service/subgrupos.service';
import { ContasService } from './../../service/contas.service';

@Component({
  selector: 'app-edit-conta',
  templateUrl: './edit-conta.component.html',
  styleUrls: ['./edit-conta.component.css']
})
export class EditContaComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  formulario!: UntypedFormGroup;
  retorno!: string;
  codigo!: number;

  listGrupos: ContasGruposModel[] = [];
  listSubgrupos: ContasSubgruposModel[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private gruposService: GruposService,
    private subgruposService: SubgruposService,
    private contasService: ContasService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.listarGrupos();
    this.createForm(this.contasService.getConta());
  }

  createForm = (contaModel: ContasModel): void => {

    this.listarSubgrupos(contaModel.contassubgruposID);

    this.formulario = this.formBuilder.group({
      id: [contaModel.id],
      contasdemonstrativosID: [contaModel.contasdemonstrativosID],
      contasgruposID: [contaModel.contasgruposID, Validators.required],
      contassubgruposID: [contaModel.contassubgruposID, Validators.required],
      codigo: [contaModel.codigo],
      nome: [contaModel.nome, Validators.required],
      caixa: [contaModel.caixa],
      lucro: [contaModel.lucro],
      situacao: [contaModel.situacao],
      empresaID: [contaModel.empresaID],
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

  listarSubgrupos(idgrupo: number): void {
    this.subgruposService.listSubgrupos(idgrupo).subscribe(
       dados => {
        this.listSubgrupos = dados;
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

  async onSubmit() {
    this.salvar();
  }

  salvar(){
    if (this.formulario.valid) {
      this.contasService.updateConta(this.formulario.value).subscribe({
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
          this.createForm(new ContasModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
