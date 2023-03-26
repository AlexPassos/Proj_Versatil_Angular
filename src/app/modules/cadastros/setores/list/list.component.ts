import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SetorModel } from './../model/setor-model';
import { SetoresService } from './../service/setores.service';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() btnEditar = new EventEmitter<string>();

  loading: boolean = false;

  position!: string;
  listSetores: SetorModel[] = [];
  setorModel!: SetorModel;

  constructor(
    private setoresService: SetoresService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarMarcas();
  }

  listarMarcas(): void {
    this.setoresService.listSetores().subscribe({
      next: (data) => (this.listSetores = data),
      error: (error) => console.log('Error: ', error),
      complete: () => console.log('Completo Sucesso')
    });

    // this.MarcaService.listMarcas().subscribe({
    //   next: (dados) => {
    //     this.listMarcas = dados;
    //     console.log('1');
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     console.log('2');
    //   },
    //   complete: () => {
    //     console.log('Retorno completo');
    //     console.log('3');
    //   },
    // });
  }

  botaoEditar(value: string, setor: SetorModel): void {
    this.btnEditar.emit(value);
    this.setoresService.setSetor(setor);
    this.setorModel = setor;
  }

  confirmPosition(position: string, setor: SetorModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse setor?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.setoresService.deleteSetor(setor);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Success',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          //this.router.navigate(['/Marcas']);
          //this.listMarcas = [];
          this.listarMarcas();
          //window.location.reload();
        }, 1000);
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            //this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
            //this.messageService.add({key: 'bc', severity:'error', summary: 'Success', detail: 'Message Content'});
            break;
          case ConfirmEventType.CANCEL:
            //this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
            //this.messageService.add({key: 'bc', severity:'success', summary: 'Cancelled', detail: 'Message Content'});
            break;
        }
      },
      key: 'positionDialog',
    });
  }
}
