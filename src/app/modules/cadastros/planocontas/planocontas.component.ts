import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-planocontas',
  templateUrl: './planocontas.component.html',
  styleUrls: ['./planocontas.component.css']
})
export class PlanocontasComponent implements OnInit {

  tituloPagina = 'Plano de contas';
  //strView = 'list';

  trocaTela = new BehaviorSubject<string>("list");

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,) {
    //this.strView = 'list';
  }

  ngOnInit(): void {

  }

  newTela(value: string){
     this.trocaTela.next(value);

     switch(this.trocaTela.value){
      case 'list':
        this.tituloPagina = 'Plano de contas';
        break;
      case 'create-grupo':
        this.tituloPagina = 'Cadastrar grupo';
        break;
      case 'edit-grupo':
        this.tituloPagina = 'Editar grupo';
        break;
      case 'create-subgrupo':
        this.tituloPagina = 'Cadastrar subgrupo';
        break;
      case 'edit-subgrupo':
        this.tituloPagina = 'Editar subgrupo';
        break;
      case 'create-conta':
        this.tituloPagina = 'Cadastrar conta';
        break;
      case 'edit-conta':
        this.tituloPagina = 'Editar conta';
        break;
      default:
        this.tituloPagina = 'Plano de contas';
    }
  }

}
