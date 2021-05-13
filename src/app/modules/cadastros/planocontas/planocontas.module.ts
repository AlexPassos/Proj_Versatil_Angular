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

import { PlanocontasRoutingModule } from './routes/planocontas-routing.module';
import { PlanocontasService } from './service/planocontas.service';
import { CreateGrupoComponent } from './grupos/create-grupo/create-grupo.component';
import { EditGrupoComponent } from './grupos/edit-grupo/edit-grupo.component';
import { CreateSubgrupoComponent } from './subgrupos/create-subgrupo/create-subgrupo.component';
import { EditSubgrupoComponent } from './subgrupos/edit-subgrupo/edit-subgrupo.component';
import { CreateContaComponent } from './contas/create-conta/create-conta.component';
import { EditContaComponent } from './contas/edit-conta/edit-conta.component';
import { ListComponent } from './list/list.component';
import { PlanocontasComponent } from './planocontas.component';
import { ListSubgrupoComponent } from './subgrupos/list-subgrupos/list-subgrupos.component';
import { ListGruposComponent } from './grupos/list-grupos/list-grupos.component';
import { ListContasComponent } from './contas/list-contas/list-contas.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    PlanocontasComponent,
    CreateGrupoComponent,
    EditGrupoComponent,
    CreateSubgrupoComponent,
    EditSubgrupoComponent,
    CreateContaComponent,
    EditContaComponent,
    ListComponent,
    ListSubgrupoComponent,
    ListGruposComponent,
    ListContasComponent,
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
    PlanocontasRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers:[PlanocontasService, ConfirmationService, MessageService]
})
export class PlanocontasModule { }
