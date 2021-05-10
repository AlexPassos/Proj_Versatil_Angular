import { NgModule } from '@angular/core';
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

import { NgxMaskModule, IConfig } from 'ngx-mask'

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { EstoquecadastroRoutingModule } from './routes/estoquecadastro-routing.module';
import { EstoquecadastroService } from './service/estoquecadastro.service';
import { EstoquecadastroComponent } from './estoquecadastro.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DadosProdutoComponent } from './forms/dados-produto/dados-produto.component';
import { InfoTributariaComponent } from './forms/info-tributaria/info-tributaria.component';
import { ObservacoesComponent } from './forms/observacoes/observacoes.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    EstoquecadastroComponent,
    EditComponent,
    CreateComponent,
    ListComponent,
    DadosProdutoComponent,
    InfoTributariaComponent,
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
    EstoquecadastroRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers:[EstoquecadastroService, ConfirmationService, MessageService]
})
export class EstoquecadastroModule { }
