import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { SetoresComponent } from '../setores.component';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

const setoresRoutes: Routes = [
  {path: '', component: SetoresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(setoresRoutes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
