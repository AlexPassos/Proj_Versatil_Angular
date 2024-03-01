import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from './shared/auth/autenticacao.guard';
import { PaginaErroComponent } from './pages/pagina-erro/pagina-erro.component';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuard]},
  {path: 'empresas', loadChildren: () => import('./modules/cadastros/empresas/empresas.module').then(m => m.EmpresasModule) },
  {path: 'bancos', loadChildren: () => import('./modules/cadastros/bancos/bancos.module').then(m => m.BancosModule) },
  {path: 'marcas', loadChildren: () => import('./modules/cadastros/marcas/marcas.module').then(m => m.MarcasModule) },
  {path: 'setores', loadChildren: () => import('./modules/cadastros/setores/setores.module').then(m => m.SetoresModule) },
  {path: 'servicos', loadChildren: () => import('./modules/cadastros/servicos/servicos.module').then(m => m.ServicosModule) },
  {path: 'colaboradores', loadChildren: () => import('./modules/cadastros/colaboradores/colaboradores.module').then(m => m.ColaboradoresModule) },
  {path: 'clientes', loadChildren: () => import('./modules/cadastros/clientes/clientes.module').then(m => m.ClientesModule) },
  {path: 'estoquecadastro', loadChildren: () => import('./modules/cadastros/estoquecadastro/estoquecadastro.module').then(m => m.EstoquecadastroModule) },
  {path: 'planocontas', loadChildren: () => import('./modules/cadastros/planocontas/planocontas.module').then(m => m.PlanocontasModule) },
  {path: 'estoqueentrada', loadChildren: () => import('./modules/estoque/estoqueentrada/estoqueentrada.module').then(m => m.EstoqueentradaModule) },
  {path: 'estoquesaida', loadChildren: () => import('./modules/estoque/estoquesaida/estoquesaida.module').then(m => m.EstoquesaidaModule) },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
