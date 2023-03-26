import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

import { EmpresaModel } from './../model/empresa-model';
import { EmpresasService } from './../service/empresas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() btnEditar = new EventEmitter<string>();

  position!: string;
  listEmpresas: EmpresaModel[] = [];
  EmpresaModel!: EmpresaModel;

  constructor(
    private EmpresaService: EmpresasService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarEmpresas();
  }

  listarEmpresas(): void {
    this.EmpresaService.listEmpresas().subscribe({
      next: (dados) => (this.listEmpresas = dados),
      error: (error) => console.log('Error: ', error),
      complete: () => console.log('Completo Sucesso')
    });
  }

  botaoEditar(value: string, Empresa: EmpresaModel): void {
    this.btnEditar.emit(value);
    this.EmpresaService.setEmpresa(Empresa);
    this.EmpresaModel = Empresa;
  }

  confirmPosition(position: string, Empresa: EmpresaModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse Empresa?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.EmpresaService.deleteEmpresa(Empresa);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Success',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarEmpresas();
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
