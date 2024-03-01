import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-estoquecadastro',
  templateUrl: './estoquecadastro.component.html',
  styleUrls: ['./estoquecadastro.component.css']
})
export class EstoquecadastroComponent implements OnInit {

  tituloPagina = 'Lista de produtos';
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
          this.tituloPagina = 'Lista de produtos';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar produto';
          break;
        case 'edit':
          this.tituloPagina = 'Editar produto';
          break;
        default:
          this.tituloPagina = 'Cadastro de produtos';
      }
  }

}
