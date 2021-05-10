import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  tituloPagina = 'Lista de emporesas';
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
          this.tituloPagina = 'Lista de empresas';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar empresa';
          break;
        case 'edit':
          this.tituloPagina = 'Editar empresa';
          break;
        default:
          this.tituloPagina = 'Cadastro de empresas';
      }
  }

}
