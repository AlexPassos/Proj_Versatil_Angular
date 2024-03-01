import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ColaboradorModel } from './../model/colaborador-model';
import { ColaboradoresService } from './../service/colaboradores.service';
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
  listColaboradores: ColaboradorModel[] = [];
  colaboradorModel!: ColaboradorModel;

  constructor(
    private colaboradoresService: ColaboradoresService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarColaboradores();
  }

  listarColaboradores(): void {
    this.colaboradoresService.listColaboradores().subscribe({
      next:(data) =>  this.listColaboradores = data,
      error: (e) => console.log("Erro: ", e),
      complete: () => console.log("complete")
     });

    //  this.colaboradoresService.listColaboradores().subscribe(data => {
  //   this.listColaboradores = data;
  //   //console.log("Retorno: ", data);
  //  }, error =>{
  //   console.log("Error: ", error);
  //  });
  }

  botaoEditar(value: string, colaborador: ColaboradorModel): void {
    this.btnEditar.emit(value);
    this.colaboradoresService.setColaborador(colaborador);
    this.colaboradorModel = colaborador;
  }

  confirmPosition(position: string, colaborador: ColaboradorModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse colaborador?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.colaboradoresService.deleteColaborador(colaborador);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarColaboradores();
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
