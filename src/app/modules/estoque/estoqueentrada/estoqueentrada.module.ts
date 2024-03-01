<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { NgModule  } from '@angular/core';
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { CurrencyMaskModule } from "ng2-currency-mask";

<<<<<<< HEAD
import { NgxMaskModule, IConfig } from 'ngx-mask'
=======
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { EstoqueentradaRoutingModule } from './routes/estoqueentrada-routing.module';
import { EstoqueentradaService } from './service/estoqueentrada.service';
import { EstoqueentradaComponent } from './estoqueentrada.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

<<<<<<< HEAD
const maskConfig: Partial<IConfig> = {
  validation: false,
};

=======
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
@NgModule({
  declarations: [
    EstoqueentradaComponent,
    EditComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatSelectFilterModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    EstoqueentradaRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
<<<<<<< HEAD
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers:[EstoqueentradaService, ConfirmationService, MessageService]
=======
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers:[EstoqueentradaService, ConfirmationService, MessageService, provideNgxMask()]
>>>>>>> 40f8a50e6af5823001df9dfe2064a10599f9c705
})
export class EstoqueentradaModule { }
