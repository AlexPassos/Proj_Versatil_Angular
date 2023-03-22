import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask  } from 'ngx-mask'

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { VerificarestoqueRoutingModule } from './routes/verificarestoque-routing.module';
import { VerificarEstoqueService } from './service/verificarestoque.service';
import { VerificarestoqueComponent } from './verificarestoque.component';

@NgModule({
  declarations: [
    VerificarestoqueComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VerificarestoqueRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers:[VerificarEstoqueService, ConfirmationService, MessageService, provideNgxMask()]
})
export class VerificarestoqueModule { }
