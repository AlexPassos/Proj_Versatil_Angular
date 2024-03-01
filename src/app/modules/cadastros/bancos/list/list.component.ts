import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BancoModel } from './../model/banco-model';
import { BancosService } from './../service/bancos.service';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-list-banco',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() btnEditar = new EventEmitter<string>();

  loading: boolean = false;

  position!: string;
  listBancos: BancoModel[] = [];
  bancoModel!: BancoModel;

  constructor(
    private bancoService: BancosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarBancos();
  }

  listarBancos(): void {
    this.bancoService.listBancos().subscribe({
      next: (data) => (this.listBancos = data),
      error: (e) => console.log('Error: ', e),
      complete: () => console.log('Completo Sucesso')
    });

    // this.bancoService.listBancos().subscribe({
    //   next: (dados) => {
    //     this.listBancos = dados;
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

  botaoEditar(value: string, banco: BancoModel): void {
    this.btnEditar.emit(value);
    this.bancoService.setBanco(banco);
    this.bancoModel = banco;
  }

  confirmPosition(position: string, banco: BancoModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse banco?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.bancoService.deleteBanco(banco);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Success',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          //this.router.navigate(['/bancos']);
          //this.listBancos = [];
          this.listarBancos();
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
