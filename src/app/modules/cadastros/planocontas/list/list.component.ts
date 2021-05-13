import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContasDemonstrativosModel } from './../model/contasdemonstrativos-model';
import { PlanocontasService } from './../service/planocontas.service';

import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() trocaTela!: BehaviorSubject<string>;

  loading: boolean= false;

  position!: string;
  listDemonstrativos: ContasDemonstrativosModel[] = [];

  constructor(
    private planocontasService: PlanocontasService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarDemonstrativos();
  }

  listarDemonstrativos(): void {
   this.planocontasService.listDemonstrativos().subscribe(data => {
    this.listDemonstrativos = data;
    //console.log("Retorno: ", data);
   }, error =>{
    console.log("Error: ", error);
   });
  }

}
