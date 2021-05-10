import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {

  tituloPagina = 'Lista de bancos';
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
          this.tituloPagina = 'Lista de bancos';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar banco';
          break;
        case 'edit':
          this.tituloPagina = 'Editar banco';
          break;
        default:
          this.tituloPagina = 'Cadastro de bancos';
      }
  }

}
