import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import {ConfirmationService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { SetoresRoutingModule } from './routes/setores-routing.module';
import { SetoresService } from './service/setores.service';
import { SetoresComponent } from './setores.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    SetoresComponent,
    EditComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SetoresRoutingModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[SetoresService, ConfirmationService, MessageService]
})
export class SetoresModule { }
