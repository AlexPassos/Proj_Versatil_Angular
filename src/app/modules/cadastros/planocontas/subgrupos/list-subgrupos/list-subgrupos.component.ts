import { Component, Input, OnInit } from '@angular/core';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from './../../model/contassubgrupos-model';
import { PlanocontasService } from './../../service/planocontas.service';

@Component({
  selector: 'app-list-subgrupo',
  templateUrl: './list-subgrupos.component.html',
  styleUrls: ['./list-subgrupos.component.css']
})
export class ListSubgrupoComponent implements OnInit {

  @Input() grupo!: ContasGruposModel;

  listSubgrupos: ContasSubgruposModel[] = [];

  constructor( private planocontasService: PlanocontasService,) { }

  ngOnInit(): void {
    this.listarSubgrupos(this.grupo.id);
  }

  listarSubgrupos(idgrupo: number): void {
    //console.log(idgrupo);

   this.planocontasService.listSubgrupos(idgrupo).subscribe(data => {
      this.listSubgrupos = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });

  }

}
