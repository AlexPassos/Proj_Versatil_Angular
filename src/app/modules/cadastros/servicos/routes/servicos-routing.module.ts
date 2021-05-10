import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { ServicosComponent } from '../servicos.component';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

const servicosRoutes: Routes = [
  {path: '', component: ServicosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(servicosRoutes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
