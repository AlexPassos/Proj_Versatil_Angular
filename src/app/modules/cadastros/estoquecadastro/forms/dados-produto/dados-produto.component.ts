import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { UnidadesService } from 'src/app/shared/services/unidades.service';
import { CfopService } from 'src/app/shared/services/cfop.service';
import { MarcasService } from 'src/app/modules/cadastros/marcas/service/marcas.service';
import { UnidadeModel } from 'src/app/shared/models/unidade-model';
import { CfopModel } from 'src/app/shared/models/cfop-model';
import { MarcaModel } from 'src/app/modules/cadastros/marcas/model/marca-model';

@Component({
  selector: 'app-dados-produto',
  templateUrl: './dados-produto.component.html',
  styleUrls: ['./dados-produto.component.css']
})
export class DadosProdutoComponent implements OnInit {

  @Output() verCpf = new EventEmitter<string>();

  @Input() formulario!: UntypedFormGroup;

  tipo: boolean = true;

  listUnidades: UnidadeModel[] = [];
  listMarcas: MarcaModel[] = [];
  listCfop: CfopModel[] = [];

  constructor(
    private unidadesService: UnidadesService,
    private cfopService: CfopService,
    private marcasService: MarcasService,
  ) {
    this.listarUnidades();
    this.listarMarcas();
    this.listarCfop();
  }

  ngOnInit(): void {    }

  listarUnidades(): void {
    this.unidadesService.listUnidades().subscribe(
      (dados) => {
        this.listUnidades = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  listarMarcas(): void {
    this.marcasService.listMarcas().subscribe(
      (dados) => {
        this.listMarcas = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  listarCfop(): void {
    this.cfopService.listCfops().subscribe(
      (dados) => {
        this.listCfop = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }


}
