import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteModel } from './../model/cliente-model';
import { ClientesService } from './../service/clientes.service';
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

  @Output() btnEditar = new EventEmitter<string>();

  loading: boolean= false;

  position!: string;
  listClientes: ClienteModel[] = [];
  clienteModel!: ClienteModel;

  constructor(
    private clientesService: ClientesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes(): void {
   this.clientesService.listClientes().subscribe(data => {
    this.listClientes = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });
  }

  botaoEditar(value: string, cliente: ClienteModel): void {
    this.btnEditar.emit(value);
    this.clientesService.setCliente(cliente);
    this.clienteModel = cliente;
  }

  confirmPosition(position: string, cliente: ClienteModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse cliente?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.clientesService.deleteCliente(cliente);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarClientes();
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
