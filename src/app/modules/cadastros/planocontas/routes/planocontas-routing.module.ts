import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { PlanocontasComponent } from '../planocontas.component';

const planoRoutes: Routes = [
  {path: '', component: PlanocontasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(planoRoutes)],
  exports: [RouterModule]
})
export class PlanocontasRoutingModule { }
