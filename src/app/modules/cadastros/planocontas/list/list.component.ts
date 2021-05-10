import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContasDemonstrativosModel } from './../model/contasdemonstrativos-model';
import { PlanocontasService } from './../service/planocontas.service';

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
  listDemonstrativos: ContasDemonstrativosModel[] = [];

  //clienteModel!: ClienteModel;

  constructor(
    private planocontasService: PlanocontasService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarDemonstrativos();
  }

  listarDemonstrativos(): void {
   this.planocontasService.listDemonstrativos().subscribe(data => {
    this.listDemonstrativos = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });
  }

  botaoEditar(value: string, cliente: ContasDemonstrativosModel): void {
    this.btnEditar.emit(value);
    //this.clientesService.setCliente(cliente);
    //this.clienteModel = cliente;
  }

  confirmPosition(position: string, cliente: ContasDemonstrativosModel): void {
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
        //this.clientesService.deleteCliente(cliente);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarDemonstrativos();
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
