import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  tituloPagina = 'Lista de colaboradores';
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
          this.tituloPagina = 'Lista de colaboradores';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar colaborador';
          break;
        case 'edit':
          this.tituloPagina = 'Editar colaborador';
          break;
        default:
          this.tituloPagina = 'Cadastro de colaboradores';
      }
  }

}
