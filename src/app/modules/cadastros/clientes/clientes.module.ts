import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { NgxMaskModule, IConfig } from 'ngx-mask'

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { ClientesRoutingModule } from './routes/clientes-routing.module';
import { ClientesService } from './service/clientes.service';
import { ClientesComponent } from './clientes.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DadosPessoaisComponent } from './forms/dados-pessoais/dados-pessoais.component';
import { InfoAdicionaisComponent } from './forms/info-adicionais/info-adicionais.component';
import { ObservacoesComponent } from './forms/observacoes/observacoes.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    ClientesComponent,
    EditComponent,
    CreateComponent,
    ListComponent,
    DadosPessoaisComponent,
    InfoAdicionaisComponent,
    ObservacoesComponent
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
    ClientesRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers:[ClientesService, ConfirmationService, MessageService]
})
export class ClientesModule { }
