import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  tituloPagina = 'Lista de marcas';
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
          this.tituloPagina = 'Lista de marcas';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar marca';
          break;
        case 'edit':
          this.tituloPagina = 'Editar marca';
          break;
        default:
          this.tituloPagina = 'Cadastro de marcas';
      }
  }

}
