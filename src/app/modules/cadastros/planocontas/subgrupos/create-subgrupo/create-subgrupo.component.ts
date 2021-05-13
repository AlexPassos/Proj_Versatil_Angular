import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from '../../model/contassubgrupos-model';
import { GruposService } from './../../service/grupos.service';
import { SubgruposService } from './../../service/subgrupos.service';

@Component({
  selector: 'app-create-subgrupo',
  templateUrl: './create-subgrupo.component.html',
  styleUrls: ['./create-subgrupo.component.css']
})
export class CreateSubgrupoComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  formulario!: FormGroup;
  retorno!: string;
  codigo!: number;

  listGrupos: ContasGruposModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private gruposService: GruposService,
    private subgruposService: SubgruposService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.listarGrupos();
    this.createForm(new ContasSubgruposModel());
  }

  createForm = (subgrupoModel: ContasSubgruposModel): void => {
    subgrupoModel.contasdemonstrativosID = 1;
    subgrupoModel.caixa = true;
    subgrupoModel.lucro = false;
    subgrupoModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [null],
      contasdemonstrativosID: [subgrupoModel.contasdemonstrativosID],
      contasgruposID: [subgrupoModel.contasgruposID, Validators.required],
      codigo: [subgrupoModel.codigo],
      nome: [subgrupoModel.nome, Validators.required],
      caixa: [subgrupoModel.caixa],
      lucro: [subgrupoModel.lucro],
      empresaID: [subgrupoModel.empresaID],
    });
  };

  maxCodigo(idgrupo: number) {
    this.subgruposService.maxCodigo(idgrupo).subscribe(
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
    await this.maxCodigo(this.formulario.controls['contasgruposID'].value);
  }

  salvar(){
    if (this.formulario.valid) {
      this.subgruposService.addSubgrupo(this.formulario.value).subscribe({
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
          this.createForm(new ContasSubgruposModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
