import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { NgxMaskModule, IConfig } from 'ngx-mask'

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { VerificarestoqueRoutingModule } from './routes/verificarestoque-routing.module';
import { VerificarEstoqueService } from './service/verificarestoque.service';
import { VerificarestoqueComponent } from './verificarestoque.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers:[VerificarEstoqueService, ConfirmationService, MessageService]
})
export class VerificarestoqueModule { }
