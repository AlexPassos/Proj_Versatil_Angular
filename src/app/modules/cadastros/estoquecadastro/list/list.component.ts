import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EstoqueCadastroModel } from './../model/estoquecadastro-model';
import { EstoquecadastroService } from './../service/estoquecadastro.service';
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
  listProdutos: EstoqueCadastroModel[] = [];
  produtoModel!: EstoqueCadastroModel;

  constructor(
    private estoquecadastroService: EstoquecadastroService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos(): void {
   this.estoquecadastroService.listProdutos().subscribe(data => {
    this.listProdutos = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });
  }

  botaoEditar(value: string, produto: EstoqueCadastroModel): void {
    this.btnEditar.emit(value);
    this.estoquecadastroService.setProduto(produto);
    this.produtoModel = produto;
  }

  confirmPosition(position: string, produto: EstoqueCadastroModel): void {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Deseja excluir esse produto?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'btn bg-gradient-danger',
      rejectButtonStyleClass: 'btn bg-gradient-secondary',
      accept: () => {
        this.estoquecadastroService.deleteProduto(produto);

        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Operação realizada com sucesso',
        });

        setTimeout(() => {
          this.listarProdutos();
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
