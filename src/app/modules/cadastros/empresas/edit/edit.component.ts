import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { EmpresaModel } from '../model/empresa-model';
import { EmpresasService } from './../service/empresas.service';
import { EstadosService } from 'src/app/shared/services/estados.service';
import { CidadesService } from 'src/app/shared/services/cidades.service';
import { UfModel } from 'src/app/shared/models/uf-model';
import { CidadeModel } from 'src/app/shared/models/cidade-model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Output() btnVoltar = new EventEmitter<string>();

  formulario!: UntypedFormGroup;
  retorno!: string;

  listEstados: UfModel[] = [];
  listCidades: CidadeModel[] = [];
  filterCidades: CidadeModel[] = this.listCidades.slice();
  empresa = new EmpresaModel();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private empresaService: EmpresasService,
    private estadosService: EstadosService,
    private cidadesService: CidadesService,
    private messageService: MessageService
  ) {
    this.listarEstados();
  }

  ngOnInit(): void {
    this.createForm(this.empresaService.getEmpresa());
    this.empresa = this.empresaService.getEmpresa();
    this.listarCidades(this.empresa.ufID);
  }

  createForm = (empresaModel: EmpresaModel): void => {
    this.formulario = this.formBuilder.group({
      id: [empresaModel.id],
      razao: [empresaModel.razao, Validators.required],
      fantasia: [empresaModel.fantasia, Validators.required],
      ie: [empresaModel.ie, Validators.required],
      cnpj: [empresaModel.cnpj, Validators.required],
      endereco: [empresaModel.endereco, Validators.required],
      numero: [empresaModel.numero, Validators.required],
      complemento: [empresaModel.complemento, Validators.required],
      bairro: [empresaModel.bairro, Validators.required],
      cidadeID: [empresaModel.cidadeID, Validators.required],
      ufID: [empresaModel.ufID, Validators.required],
      cep: [empresaModel.cep, Validators.required],
      telefone: [empresaModel.telefone, Validators.required],
      fax: [empresaModel.fax, Validators.required],
      email: [empresaModel.email, Validators.required]
    });
  };

  listarEstados(): void {
    this.estadosService.listEstados().subscribe(
       dados => {
        this.listEstados = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      error => {
        console.log("Error: ", error);
      }
    );
  }

  listarCidades(idestado: number): void{
    this.cidadesService.listCidades(idestado).subscribe(
      dados => {
        this.listCidades = dados;
        this.filterCidades = dados;
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
    this.btnVoltar.emit(value);
  }

  onSubmit(): void {
    //console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.empresaService.updateEmpresa(this.formulario.value).subscribe({
        next: (dados) => {
          this.retorno = dados;
          //console.log(this.retorno);

          this.messageService.add({
            key: 'bc',
            severity: 'success',
            summary: 'Success',
            detail: 'Cadastro realizado com sucesso!',
          });
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          //console.log('Completo');

          //Limpando o formulário
          this.createForm(new EmpresaModel());

          setTimeout(() => {
            this.btnVoltar.emit('list');
          }, 1000);

        },
      });
    }
  }


}
