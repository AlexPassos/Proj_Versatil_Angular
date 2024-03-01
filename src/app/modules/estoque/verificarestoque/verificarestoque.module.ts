<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskModule } from "ng2-currency-mask";

<<<<<<< HEAD
import { NgxMaskModule, IConfig } from 'ngx-mask'
=======
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask  } from 'ngx-mask'
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { VerificarestoqueRoutingModule } from './routes/verificarestoque-routing.module';
import { VerificarEstoqueService } from './service/verificarestoque.service';
import { VerificarestoqueComponent } from './verificarestoque.component';

<<<<<<< HEAD
const maskConfig: Partial<IConfig> = {
  validation: false,
};

=======
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
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
<<<<<<< HEAD
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers:[VerificarEstoqueService, ConfirmationService, MessageService]
=======
    NgxMaskDirective,
    NgxMaskPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers:[VerificarEstoqueService, ConfirmationService, MessageService, provideNgxMask()]
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
})
export class VerificarestoqueModule { }
