import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { EstoqueEntradaModel } from './../model/estoqueentrada-model';
import { EstoqueentradaService } from './../service/estoqueentrada.service';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
<<<<<<< HEAD
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  loading: boolean= false;
=======
  selector: 'AppList',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() trocaTela!: BehaviorSubject<string>;

  loading: boolean = false;
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705

  position!: string;
  listEntradas: EstoqueEntradaModel[] = [];
  entradaModel!: EstoqueEntradaModel;

  constructor(
    private estoqueentradaService: EstoqueentradaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarEntradas();
  }

  listarEntradas(): void {
<<<<<<< HEAD
   this.estoqueentradaService.listEntradas().subscribe(data => {
    this.listEntradas = data;
    console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });
=======
    this.estoqueentradaService.listEntradas().subscribe({
      next: (data) => (this.listEntradas = data),
      error: (error) => console.log('Error: ', error),
      complete: () => console.log('Completo Sucesso')
    });
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
  }

  botaoEditar(value: string, entrada: EstoqueEntradaModel): void {
    this.trocaTela.next(value);
    this.estoqueentradaService.setEntrada(entrada);
    this.entradaModel = entrada;
  }

  confirmPosition(position: string, entrada: EstoqueEntradaModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse entrada do estoque?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.estoqueentradaService.deleteEntrada(entrada);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarEntradas();
        }, 1000);
<<<<<<< HEAD

=======
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            break;
          case ConfirmEventType.CANCEL:
            break;
        }
      },
      key: 'positionDialog',
    });
  }
<<<<<<< HEAD

=======
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
}
