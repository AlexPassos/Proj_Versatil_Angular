import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { VerificarestoqueComponent } from '../verificarestoque.component';

const estoqueRoutes: Routes = [
  {path: '', component: VerificarestoqueComponent},
];

@NgModule({
  imports: [RouterModule.forChild(estoqueRoutes)],
  exports: [RouterModule]
})
export class VerificarestoqueRoutingModule { }
