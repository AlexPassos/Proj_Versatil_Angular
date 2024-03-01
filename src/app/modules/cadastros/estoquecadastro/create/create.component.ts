import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { of, Observable } from 'rxjs';

import { EstoqueCadastroModel } from '../model/estoquecadastro-model';
import { EstoquecadastroService } from './../service/estoquecadastro.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  @Output() btnVoltar = new EventEmitter<string>();

  formulario!: UntypedFormGroup;
  frm$!: Observable<EstoqueCadastroModel>;
  bSalvar = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private estoquecadastroService: EstoquecadastroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm(new EstoqueCadastroModel());
  }

  ngOnDestroy(): void {
    //aa
  }

  createForm = (produtoModel: EstoqueCadastroModel): void => {

    produtoModel.datacad = new Date();
    produtoModel.situacao = true;
    produtoModel.peso = 0;
    produtoModel.comissao = 0;
    produtoModel.valor = 0;
    produtoModel.aliquotacredito = "0";
    produtoModel.aliquotabaseicms = "0";
    produtoModel.aliquotaicms = "0";
    produtoModel.pautafiscal = "0";
    produtoModel.aliquotabaseicmsst = "0";
    produtoModel.aliquotaicmsst = "0";
    produtoModel.aliquotaiss = "0";
    produtoModel.aliquotapis = "0";
    produtoModel.aliquotacofins = "0";
    produtoModel.aliquotaipi = "0";
    produtoModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [null],
      datacad: [produtoModel.datacad, Validators.required],
      situacao: [produtoModel.situacao, Validators.required],
      descricao: [produtoModel.descricao, Validators.required],
      unidadesID: [produtoModel.unidadesID],
      marcasID: [produtoModel.marcasID],
      ncm: [produtoModel.ncm],
      cfopID: [produtoModel.cfopID],
      peso: [produtoModel.peso],
      comissao: [produtoModel.comissao],
      valor: [produtoModel.valor],
      obs: [produtoModel.obs],
      tribicmsID: [produtoModel.tribicmsID],
      aliquotacredito: [produtoModel.aliquotacredito],
      aliquotabaseicms: [produtoModel.aliquotabaseicms],
      aliquotaicms: [produtoModel.aliquotaicms],
      pautafiscal: [produtoModel.pautafiscal],
      aliquotabaseicmsst: [produtoModel.aliquotabaseicmsst],
      aliquotaicmsst: [produtoModel.aliquotaicmsst],
      tribpisID: [produtoModel.tribpisID],
      aliquotapis: [produtoModel.aliquotapis],
      tribcofinsID: [produtoModel.tribcofinsID],
      aliquotacofins: [produtoModel.aliquotacofins],
      tribipiID: [produtoModel.tribipiID],
      aliquotaipi: [produtoModel.aliquotaipi],
      aliquotaiss: [produtoModel.aliquotaiss],
      cod: [produtoModel.cod],
      empresaID: [produtoModel.empresaID],
      cest: [produtoModel.cest],
    });

  };

  getErrorMessage() {
    if (this.formulario.hasError('required')) {
      return 'You must enter a value';
    }
    return this.formulario.hasError('descricao') ? 'Not a valid' : '';
  }

  botaoVoltar(value: string): void {
    this.btnVoltar.emit(value);
  }

  onSubmit(): void {
    //console.log(this.formulario.value);

    if (this.formulario.valid) {

      this.estoquecadastroService
        .addProduto(this.formulario.value)
        .subscribe({
          next: (dados) => {

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
            this.createForm(new EstoqueCadastroModel());
            setTimeout(() => {
              this.btnVoltar.emit('list');
            }, 1000);
          },
        });
    }
  }

}
