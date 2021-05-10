import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServicoModel } from './../model/servico-model';
import { ServicosService } from './../service/servicos.service';
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
  listServicos: ServicoModel[] = [];
  servicoModel!: ServicoModel;

  constructor(
    private servicosService: ServicosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarServicos();
  }

  listarServicos(): void {
   this.servicosService.listServicos().subscribe(data => {
    this.listServicos = data;
    console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });
  }

  botaoEditar(value: string, servico: ServicoModel): void {
    this.btnEditar.emit(value);
    this.servicosService.setServico(servico);
    this.servicoModel = servico;
  }

  confirmPosition(position: string, servico: ServicoModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse serviço?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.servicosService.deleteServico(servico);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Success',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarServicos();
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
