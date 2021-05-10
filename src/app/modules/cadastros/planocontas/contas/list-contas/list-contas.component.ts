import { Component, Input, OnInit } from '@angular/core';

import { ContasModel } from '../../model/contas-model';
import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from '../../model/contassubgrupos-model';
import { PlanocontasService } from './../../service/planocontas.service';

@Component({
  selector: 'app-list-contas',
  templateUrl: './list-contas.component.html',
  styleUrls: ['./list-contas.component.css']
})
export class ListContasComponent implements OnInit {

  @Input() grupo!: ContasGruposModel;
  @Input() subgrupo!: ContasSubgruposModel;

  listContas: ContasModel[] = [];

  constructor(private planocontasService: PlanocontasService) { }

  ngOnInit(): void {
    this.listarContas(this.subgrupo.contasgruposID, this.subgrupo.id);
  }

  listarContas(idgrupo: number, idsubgrupo: number): void {

   this.planocontasService.listContas(idgrupo, idsubgrupo).subscribe(data => {
      this.listContas = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });

  }

}
