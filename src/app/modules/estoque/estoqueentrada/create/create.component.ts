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
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
=======
  selector: 'AppCreate',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.css']
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
})
export class CreateComponent implements OnInit {

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
    this.createForm(new EstoqueEntradaModel());
  }

  createForm = (entradaModel: EstoqueEntradaModel): void => {
    entradaModel.datacad = new Date();
    entradaModel.quantidade = 0;
    entradaModel.valor = 0;
    entradaModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [null],
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
      this.entradaService.addEntrada(this.formulario.value).subscribe({
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
          this.createForm(new EstoqueEntradaModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
