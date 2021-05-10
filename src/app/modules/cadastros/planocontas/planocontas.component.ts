import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planocontas',
  templateUrl: './planocontas.component.html',
  styleUrls: ['./planocontas.component.css']
})
export class PlanocontasComponent implements OnInit {

  tituloPagina = 'Plano de contas';
  strView = 'list';

  constructor() {
    this.strView = 'list';
  }

  ngOnInit(): void {

  }

  ExibirView = (view: string): void => {
      this.strView = view;

      switch(view){
        case 'list':
          this.tituloPagina = 'Plano de contas';
          break;
        case 'create-grupo':
          this.tituloPagina = 'Cadastrar grupo';
          break;
        case 'edit-grupo':
          this.tituloPagina = 'Editar grupo';
          break;
        case 'create-subgrupo':
          this.tituloPagina = 'Cadastrar subgrupo';
          break;
        case 'edit-subgrupo':
          this.tituloPagina = 'Editar subgrupo';
          break;
        case 'create-conta':
          this.tituloPagina = 'Cadastrar conta';
          break;
        case 'edit-conta':
          this.tituloPagina = 'Editar conta';
          break;
        default:
          this.tituloPagina = 'Plano de contas';
      }
  }


}
