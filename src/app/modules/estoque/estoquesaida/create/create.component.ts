import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
import { BehaviorSubject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { EstoqueCadastroModel } from 'src/app/modules/cadastros/estoquecadastro/model/estoquecadastro-model';
import { EstoqueSaidaModel } from '../model/estoquesaida-model';
import { EstoquesaidaService } from './../service/estoquesaida.service';
import { EstoquecadastroService } from 'src/app/modules/cadastros/estoquecadastro/service/estoquecadastro.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
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
    private saidaService: EstoquesaidaService,
    private produtosService: EstoquecadastroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
    this.createForm(new EstoqueSaidaModel());
  }

  createForm = (saidaModel: EstoqueSaidaModel): void => {
    saidaModel.datacad = new Date();
    saidaModel.quantidade = 0;
    saidaModel.empresaID = 1;

    this.formulario = this.formBuilder.group({
      id: [null],
      datacad: [saidaModel.datacad, Validators.required],
      estoquecadastroID: [saidaModel.estoquecadastroID, Validators.required],
      quantidade: [saidaModel.quantidade, Validators.required],
      obs: [saidaModel.obs],
      empresaID: [saidaModel.empresaID],
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
      this.saidaService.addSaida(this.formulario.value).subscribe({
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
          this.createForm(new EstoqueSaidaModel());
          setTimeout(() => {
            this.trocaTela.next('list');
          }, 1000);
        },
      });
    }
  }

}
