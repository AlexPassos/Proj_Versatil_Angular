import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

import { ContasGruposModel } from '../../model/contasgrupos-model';
import { ContasSubgruposModel } from './../../model/contassubgrupos-model';
import { PlanocontasService } from './../../service/planocontas.service';
import { SubgruposService } from './../../service/subgrupos.service';

@Component({
  selector: 'app-list-subgrupo',
  templateUrl: './list-subgrupos.component.html',
  styleUrls: ['./list-subgrupos.component.css']
})
export class ListSubgrupoComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;
  @Input() grupo!: ContasGruposModel;

  position: string = "bottom";
  listSubgrupos: ContasSubgruposModel[] = [];

  constructor(
    private planocontasService: PlanocontasService,
    private subgruposService: SubgruposService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
    this.listarSubgrupos(this.grupo.id);
  }

  listarSubgrupos(idgrupo: number): void {
    //console.log(idgrupo);

   this.planocontasService.listSubgrupos(idgrupo).subscribe(data => {
      this.listSubgrupos = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });

  }

  botaoEditar(value: string, subgrupo: ContasSubgruposModel): void {
    this.trocaTela.next(value);
    this.subgruposService.setSubgrupo(subgrupo);
  }

  confirmPosition(position: string, subgrupo: ContasSubgruposModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse subgrupo? ',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.subgruposService.deleteSubgrupo(subgrupo);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

         setTimeout(() => {
          this.listarSubgrupos(subgrupo.id);
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
