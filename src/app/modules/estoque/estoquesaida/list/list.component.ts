import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { EstoqueSaidaModel } from './../model/estoquesaida-model';
import { EstoquesaidaService } from './../service/estoquesaida.service';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  loading: boolean= false;

  position!: string;
  listSaidas: EstoqueSaidaModel[] = [];
  saidaModel!: EstoqueSaidaModel;

  constructor(
    private estoquesaidaService: EstoquesaidaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarSaidas();
  }

  listarSaidas(): void {
   this.estoquesaidaService.listSaidas().subscribe(data => {
    this.listSaidas = data;
    console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });
  }

  botaoEditar(value: string, saida: EstoqueSaidaModel): void {
    this.trocaTela.next(value);
    this.estoquesaidaService.setSaida(saida);
    this.saidaModel = saida;
  }

  confirmPosition(position: string, saida: EstoqueSaidaModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir essa saída do estoque?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.estoquesaidaService.deleteSaida(saida);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarSaidas();
        }, 1000);

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

}
