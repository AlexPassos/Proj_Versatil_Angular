import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSelectFilterModule } from 'mat-select-filter';

import { NgxMaskModule, IConfig } from 'ngx-mask'

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { EmpresasRoutingModule } from './routes/empresas-routing.module';
import { EmpresasService } from './service/empresas.service';
import { EmpresasComponent } from './empresas.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

//https://www.npmjs.com/package/mat-select-filter
//https://www.npmjs.com/package/ngx-mask
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSelectFilterModule,
    FormsModule,
    ReactiveFormsModule,
    EmpresasRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  declarations: [
    EmpresasComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  providers:[EmpresasService, ConfirmationService, MessageService]
})
export class EmpresasModule { }
