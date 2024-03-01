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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

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
    this.createForm(this.estoquecadastroService.getProduto());
  }

  ngOnDestroy(): void {
    //aa
  }

  createForm = (produtoModel: EstoqueCadastroModel): void => {

    produtoModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [produtoModel.id],
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
        .updateProduto(this.formulario.value)
        .subscribe({
          next: (dados) => {

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
            this.createForm(new EstoqueCadastroModel());
            setTimeout(() => {
              this.btnVoltar.emit('list');
            }, 1000);
          },
        });
    }
  }

}
