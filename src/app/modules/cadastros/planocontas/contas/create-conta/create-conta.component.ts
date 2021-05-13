import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from '../../model/contassubgrupos-model';
import { ContasModel } from '../../model/contas-model';
import { GruposService } from './../../service/grupos.service';
import { SubgruposService } from './../../service/subgrupos.service';
import { ContasService } from './../../service/contas.service';

@Component({
  selector: 'app-create-conta',
  templateUrl: './create-conta.component.html',
  styleUrls: ['./create-conta.component.css']
})
export class CreateContaComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  formulario!: FormGroup;
  retorno!: string;
  codigo!: number;

  listGrupos: ContasGruposModel[] = [];
  listSubgrupos: ContasSubgruposModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private gruposService: GruposService,
    private subgruposService: SubgruposService,
    private contasService: ContasService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.listarGrupos();
    this.createForm(new ContasModel());
  }

  createForm = (contaModel: ContasModel): void => {
    contaModel.contasdemonstrativosID = 1;
    contaModel.caixa = true;
    contaModel.lucro = false;
    contaModel.situacao = true;
    contaModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [null],
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

  maxCodigo(idgrupo: number, idsubgrupo: number) {
    this.contasService.maxCodigo(idgrupo, idsubgrupo).subscribe(
      (data) => {
        //console.log('Retorno: ', data[0]);
        this.formulario.controls['codigo'].setValue(data[0]);
        this.salvar();
      },
      (error) => {
        console.log('Erro: ', error);
      }
    );
  }

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
    await this.maxCodigo(
        this.formulario.controls['contasgruposID'].value,
        this.formulario.controls['contassubgruposID'].value);
  }

  salvar(){
    if (this.formulario.valid) {
      this.contasService.addConta(this.formulario.value).subscribe({
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
          this.createForm(new ContasModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
