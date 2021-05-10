import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  tituloPagina = 'Lista de serviços';
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
          this.tituloPagina = 'Lista de serviços';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar serviço';
          break;
        case 'edit':
          this.tituloPagina = 'Editar serviço';
          break;
        default:
          this.tituloPagina = 'Cadastro de serviços';
      }
  }

}
