import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit {

  tituloPagina = 'Lista de setores';
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
          this.tituloPagina = 'Lista de setores';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar setor';
          break;
        case 'edit':
          this.tituloPagina = 'Editar setor';
          break;
        default:
          this.tituloPagina = 'Cadastro de setores';
      }
  }

}
