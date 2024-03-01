import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
<<<<<<< HEAD
  selector: 'app-estoqueentrada',
  templateUrl: './estoqueentrada.component.html',
=======
  selector: 'AppEstoqueEntrada',
  templateUrl: 'estoqueentrada.component.html',
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
  styleUrls: ['./estoqueentrada.component.css']
})
export class EstoqueentradaComponent implements OnInit {

  tituloPagina = 'Entradas no estoque';

<<<<<<< HEAD
  trocaTela = new BehaviorSubject<string>("list");
=======
  public trocaTela = new BehaviorSubject<string>("list");
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705

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
