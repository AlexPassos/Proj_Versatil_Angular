import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { EstoquesaidaComponent } from '../estoquesaida.component';

const estoquesaidaRoutes: Routes = [
  {path: '', component: EstoquesaidaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(estoquesaidaRoutes)],
  exports: [RouterModule]
})
export class EstoquesaidaRoutingModule { }
