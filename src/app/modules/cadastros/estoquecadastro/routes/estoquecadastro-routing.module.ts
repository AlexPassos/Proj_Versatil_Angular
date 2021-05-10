import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { EstoquecadastroComponent } from '../estoquecadastro.component';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

const estoqueRoutes: Routes = [
  {path: '', component: EstoquecadastroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(estoqueRoutes)],
  exports: [RouterModule]
})
export class EstoquecadastroRoutingModule { }
