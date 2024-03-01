import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { EstoqueentradaComponent } from '../estoqueentrada.component';

const estoqueentradaRoutes: Routes = [
  {path: '', component: EstoqueentradaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(estoqueentradaRoutes)],
  exports: [RouterModule]
})
export class EstoqueentradaRoutingModule { }
