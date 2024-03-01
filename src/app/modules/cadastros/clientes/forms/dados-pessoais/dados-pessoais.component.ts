import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { EstadosService } from 'src/app/shared/services/estados.service';
import { CidadesService } from 'src/app/shared/services/cidades.service';
import { UfModel } from 'src/app/shared/models/uf-model';
import { CidadeModel } from 'src/app/shared/models/cidade-model';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css'],
})
export class DadosPessoaisComponent implements OnInit {
  @Output() verCpf = new EventEmitter<string>();

  @Input() formulario!: UntypedFormGroup;

  tipo: boolean = true;

  listEstados: UfModel[] = [];
  listCidades: CidadeModel[] = [];
  filterCidades: CidadeModel[] = this.listCidades.slice();

  constructor(
    private estadosService: EstadosService,
    private cidadesService: CidadesService,
  ) {
    this.listarEstados();
  }

  ngOnInit(): void {
    if (this.formulario.controls['ufID'].value != null) {
      this.listarCidades(this.formulario.controls['ufID'].value);
    }
  }

  verificaCpfCnpj(cpfcnpj: any) {
    this.verCpf.emit(cpfcnpj.target.value.replace("/", "*"));
  }

  listarEstados(): void {
    this.estadosService.listEstados().subscribe(
      (dados) => {
        this.listEstados = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  listarCidades(idestado: number): void {
    this.cidadesService.listCidades(idestado).subscribe(
      (dados) => {
        this.listCidades = dados;
        this.filterCidades = dados;
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  disabilitaInputs() {
    this.tipo = !this.tipo;
    this.formulario.controls['cpfcnpj'].setValue('');
    this.formulario.controls['fantasia'].setValue('');
    this.formulario.controls['orgaoemissor'].setValue('');
    this.formulario.controls['dataemissao'].setValue('');
    this.formulario.controls['nascimento'].setValue('');
    this.formulario.controls['sexo'].setValue('');
    this.formulario.controls['profissaoID'].setValue('');
    this.formulario.controls['civil'].setValue('');

    if (this.tipo) {
      this.formulario.controls['fantasia'].disable();
      this.formulario.controls['orgaoemissor'].enable();
      this.formulario.controls['dataemissao'].enable();
      this.formulario.controls['nascimento'].enable();
      this.formulario.controls['sexo'].enable();
      this.formulario.controls['profissaoID'].enable();
      this.formulario.controls['civil'].enable();
    } else {
      this.formulario.controls['fantasia'].enable();
      this.formulario.controls['orgaoemissor'].disable();
      this.formulario.controls['dataemissao'].disable();
      this.formulario.controls['nascimento'].disable();
      this.formulario.controls['sexo'].disable();
      this.formulario.controls['profissaoID'].disable();
      this.formulario.controls['civil'].disable();
    }
  }

}
