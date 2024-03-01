import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-estoquesaida',
  templateUrl: './estoquesaida.component.html',
  styleUrls: ['./estoquesaida.component.css']
})
export class EstoquesaidaComponent implements OnInit {

  tituloPagina = 'Saídas do estoque';

  trocaTela = new BehaviorSubject<string>("list");

  constructor() {
  }

  ngOnInit(): void {

  }

  newTela(value: string){
    this.trocaTela.next(value);

    switch(this.trocaTela.value){
      case 'list':
          this.tituloPagina = 'Saídas do estoque';
          break;
        case 'create':
          this.tituloPagina = 'Cadastrar saída';
          break;
        case 'edit':
          this.tituloPagina = 'Editar saída';
          break;
        default:
          this.tituloPagina = 'Saídas do estoque';
   }
 }

}
