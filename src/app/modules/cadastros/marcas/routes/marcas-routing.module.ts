import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from 'src/app/shared/auth/autenticacao.guard';

import { MarcasComponent } from '../marcas.component';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

const marcasRoutes: Routes = [
  {path: '', component: MarcasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(marcasRoutes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
