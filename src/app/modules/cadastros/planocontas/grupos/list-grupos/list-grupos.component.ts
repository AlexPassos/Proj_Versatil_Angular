import { Component, Input, OnInit } from '@angular/core';

import { ContasDemonstrativosModel } from '../../model/contasdemonstrativos-model';
import { ContasGruposModel } from './../../model/contasgrupos-model';
import { PlanocontasService } from './../../service/planocontas.service';

@Component({
  selector: 'app-list-grupos',
  templateUrl: './list-grupos.component.html',
  styleUrls: ['./list-grupos.component.css']
})
export class ListGruposComponent implements OnInit {

  @Input() demo!: ContasDemonstrativosModel;

  listGrupos: ContasGruposModel[] = [];

  constructor(private planocontasService: PlanocontasService,) { }

  ngOnInit(): void {
    this.listarGrupos();
  }

  listarGrupos(): void {
    this.planocontasService.listGrupos().subscribe(data => {
     this.listGrupos = data;
     //console.log("Retorno: ", data);
    }, error =>{
     console.log("Error: ", error);
    });
   }

}
