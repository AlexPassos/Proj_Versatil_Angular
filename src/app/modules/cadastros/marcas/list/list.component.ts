import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MarcaModel } from './../model/marca-model';
import { MarcasService } from './../service/marcas.service';
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
  listMarcas: MarcaModel[] = [];
  MarcaModel!: MarcaModel;

  constructor(
    private MarcaService: MarcasService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarMarcas();
  }

  listarMarcas(): void {
   this.MarcaService.listMarcas().subscribe(data => {
    this.listMarcas = data;
    console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
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

  botaoEditar(value: string, marca: MarcaModel): void {
    this.btnEditar.emit(value);
    this.MarcaService.setMarca(marca);
    this.MarcaModel = marca;
  }

  confirmPosition(position: string, Marca: MarcaModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse marca?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.MarcaService.deleteMarca(Marca);

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
