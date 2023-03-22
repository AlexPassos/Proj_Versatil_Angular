import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'AppEstoqueEntrada',
  templateUrl: 'estoqueentrada.component.html',
  styleUrls: ['./estoqueentrada.component.css']
})
export class EstoqueentradaComponent implements OnInit {

  tituloPagina = 'Entradas no estoque';

  public trocaTela = new BehaviorSubject<string>("list");

  constructor() {
  }

  ngOnInit(): void {

  }

  newTela(value: string){
    this.trocaTela.next(value);

    switch(this.trocaTela.value){
      case 'list':
          this.tituloPagina = 'Entradas no estoque';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar entrada';
          break;
        case 'edit':
          this.tituloPagina = 'Editar entrada';
          break;
        default:
          this.tituloPagina = 'Entradas no estoque';
   }
 }

}
