import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask  } from 'ngx-mask'

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
    NgxMaskDirective,
    NgxMaskPipe
  ],
  declarations: [
    EmpresasComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  providers:[EmpresasService, ConfirmationService, MessageService, provideNgxMask()]
})
export class EmpresasModule { }
