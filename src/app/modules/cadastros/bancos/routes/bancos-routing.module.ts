import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { BancosComponent } from '../bancos.component';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

const bancosRoutes: Routes = [
  {path: '', component: BancosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(bancosRoutes)],
  exports: [RouterModule]
})
export class BancosRoutingModule { }
