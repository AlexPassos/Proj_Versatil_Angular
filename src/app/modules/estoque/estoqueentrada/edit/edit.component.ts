import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
import { BehaviorSubject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { EstoqueCadastroModel } from 'src/app/modules/cadastros/estoquecadastro/model/estoquecadastro-model';
import { EstoqueEntradaModel } from '../model/estoqueentrada-model';
import { EstoqueentradaService } from './../service/estoqueentrada.service';
import { EstoquecadastroService } from 'src/app/modules/cadastros/estoquecadastro/service/estoquecadastro.service';

@Component({
<<<<<<< HEAD
  selector: 'app-edit',
=======
  selector: 'AppEdit',
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

<<<<<<< HEAD
  formulario!: FormGroup;
=======
  formulario!: UntypedFormGroup;
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
  retorno!: string;
  codigo!: number;

  listProdutos: EstoqueCadastroModel[] = [];

  constructor(
<<<<<<< HEAD
    private formBuilder: FormBuilder,
=======
    private formBuilder: UntypedFormBuilder,
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
    private entradaService: EstoqueentradaService,
    private produtosService: EstoquecadastroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
    this.createForm(this.entradaService.getEntrada());
  }

  createForm = (entradaModel: EstoqueEntradaModel): void => {

    entradaModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [entradaModel.id],
      datacad: [entradaModel.datacad, Validators.required],
      estoquecadastroID: [entradaModel.estoquecadastroID, Validators.required],
      quantidade: [entradaModel.quantidade, Validators.required],
      valor: [entradaModel.valor, Validators.required],
      obs: [entradaModel.obs],
      empresaID: [entradaModel.empresaID],
    });
  };

  listarProdutos(): void {
    this.produtosService.listProdutos().subscribe(
       dados => {
        this.listProdutos = dados;
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
    await this.salvar();
  }

  salvar(){
    if (this.formulario.valid) {
      this.entradaService.updateEntrada(this.formulario.value).subscribe({
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
          this.createForm(new EstoqueEntradaModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
