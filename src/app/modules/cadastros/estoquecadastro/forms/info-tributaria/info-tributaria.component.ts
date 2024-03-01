import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { SituacoesTributariasService } from 'src/app/shared/services/situacoes-tributarias.service';
import { SitTributariaIcmsModel } from 'src/app/shared/models/sit-tributaria-icms-model';
import { SitTributariaCofinsModel } from 'src/app/shared/models/sit-tributaria-cofins-model';
import { SitTributariaPisModel } from 'src/app/shared/models/sit-tributaria-pis-model';
import { SitTributariaIpiModel } from 'src/app/shared/models/sit-tributaria-ipi-model';

@Component({
  selector: 'app-info-tributaria',
  templateUrl: './info-tributaria.component.html',
  styleUrls: ['./info-tributaria.component.css']
})
export class InfoTributariaComponent implements OnInit {

  @Input() formulario!: UntypedFormGroup;

  habilitado: boolean = false;

  listIcms: SitTributariaIcmsModel[] = [];
  listCofins: SitTributariaCofinsModel[] = [];
  listPis: SitTributariaPisModel[] = [];
  listIpi: SitTributariaIpiModel[] = [];

  constructor(private sittributariasService: SituacoesTributariasService,) {
    this.listarIcms();
    this.listarCofins();
    this.listarPis();
    this.listarIpi();
   }

  ngOnInit(): void {
  }

  listarIcms(): void {
    this.sittributariasService.listIcms().subscribe(
      (dados) => {
        this.listIcms = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  listarCofins(): void {
    this.sittributariasService.listCofins().subscribe(
      (dados) => {
        this.listCofins = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  listarPis(): void {
    this.sittributariasService.listPis().subscribe(
      (dados) => {
        this.listPis = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  listarIpi(): void {
    this.sittributariasService.listIpi().subscribe(
      (dados) => {
        this.listIpi = dados;
        //console.log("Retorno: ", this.listEmpresas);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

}
