import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EstadosService } from 'src/app/shared/services/estados.service';
import { CidadesService } from 'src/app/shared/services/cidades.service';
import { UfModel } from 'src/app/shared/models/uf-model';
import { CidadeModel } from 'src/app/shared/models/cidade-model';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  @Output() verCpf = new EventEmitter<string>();

  @Input() formulario!: FormGroup;

  listEstados: UfModel[] = [];
  listCidades: CidadeModel[] = [];
  filterCidades: CidadeModel[] = this.listCidades.slice();

  constructor(
    private estadosService: EstadosService,
    private cidadesService: CidadesService,
  ) {  this.listarEstados();}

  ngOnInit(): void {
    if (this.formulario.controls['ufID'].value != null){
      this.listarCidades(this.formulario.controls['ufID'].value);
    }
  }

  verificaCPf(cpf: any){
    //var d: string = cpf.target.value;
    //console.log(cpf.target.value);
    //let retorno = d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    this.verCpf.emit(cpf.target.value);
  }

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

}
