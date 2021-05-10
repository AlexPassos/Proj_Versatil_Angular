import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { ClientesComponent } from '../clientes.component';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

const clientesRoutes: Routes = [
  {path: '', component: ClientesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(clientesRoutes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
