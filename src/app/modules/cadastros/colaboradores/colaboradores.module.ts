import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import { MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule} from '@angular/material/icon';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { NgxMaskModule, IConfig } from 'ngx-mask'

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { ColaboradoresRoutingModule } from './routes/colaboradores-routing.module';
import { ColaboradoresService } from './service/colaboradores.service';
import { ColaboradoresComponent } from './colaboradores.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DadosPessoaisComponent } from './forms/dados-pessoais/dados-pessoais.component';
import { InfoAdicionaisComponent } from './forms/info-adicionais/info-adicionais.component';
import { AcessoComponent } from './forms/acesso/acesso.component';
import { ObservacoesComponent } from './forms/observacoes/observacoes.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    ColaboradoresComponent,
    EditComponent,
    CreateComponent,
    ListComponent,
    DadosPessoaisComponent,
    InfoAdicionaisComponent,
    AcessoComponent,
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
    ColaboradoresRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers:[ColaboradoresService, ConfirmationService, MessageService]
})
export class ColaboradoresModule { }
