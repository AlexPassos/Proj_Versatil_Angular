import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ContasModel } from '../../model/contas-model';
import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from '../../model/contassubgrupos-model';
import { PlanocontasService } from './../../service/planocontas.service';
import { ContasService } from './../../service/contas.service';

import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-list-contas',
  templateUrl: './list-contas.component.html',
  styleUrls: ['./list-contas.component.css']
})
export class ListContasComponent implements OnInit {

  @Input() grupo!: ContasGruposModel;
  @Input() subgrupo!: ContasSubgruposModel;
  @Input() trocaTela!: BehaviorSubject<string>;

  position: string = "bottom";

  listContas: ContasModel[] = [];

  constructor(
    private planocontasService: PlanocontasService,
    private contasService: ContasService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
    this.listarContas(this.subgrupo.contasgruposID, this.subgrupo.id);
  }

  listarContas(idgrupo: number, idsubgrupo: number): void {

   this.planocontasService.listContas(idgrupo, idsubgrupo).subscribe(data => {
      this.listContas = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });

  }

  botaoEditar(value: string, conta: ContasModel): void {
    this.trocaTela.next(value);
    this.contasService.setConta(conta);
  }

  confirmPosition(position: string, conta: ContasModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir essa conta? ',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.contasService.deleteConta(conta);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

         setTimeout(() => {
           this.listarContas(conta.contasgruposID, conta.contassubgruposID);
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
