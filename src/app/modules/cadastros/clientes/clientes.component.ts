import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  tituloPagina = 'Lista de clientes';
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
          this.tituloPagina = 'Lista de clientes';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar cliente';
          break;
        case 'edit':
          this.tituloPagina = 'Editar cliente';
          break;
        default:
          this.tituloPagina = 'Cadastro de clientes';
      }
  }

}
