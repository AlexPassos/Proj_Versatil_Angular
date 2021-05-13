import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ContasGruposModel } from './../../model/contasgrupos-model';
import { PlanocontasService } from './../../service/planocontas.service';
import { GruposService } from './../../service/grupos.service';

import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-grupos',
  templateUrl: './list-grupos.component.html',
  styleUrls: ['./list-grupos.component.css']
})
export class ListGruposComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  position: string = "bottom";
  listGrupos: ContasGruposModel[] = [];

  constructor(
    private planocontasService: PlanocontasService,
    private gruposService: GruposService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
    this.listarGrupos();
  }

  botaoEditar(value: string, grupo: ContasGruposModel): void {
    this.trocaTela.next(value);
    this.gruposService.setGrupo(grupo);
  }

  listarGrupos(): void {
    this.planocontasService.listGrupos().subscribe(data => {
     this.listGrupos = data;
     //console.log("Retorno: ", data);
    }, error =>{
     console.log("Error: ", error);
    });
   }

   confirmPosition(position: string, grupo: ContasGruposModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse grupo? ',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.gruposService.deleteGrupo(grupo);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

         setTimeout(() => {
           this.listarGrupos();
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
