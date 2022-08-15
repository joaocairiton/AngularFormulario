
import { ClienteComponent } from './cliente/cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetailsComponent } from './details/details.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'atualizar/:id', component: AtualizarComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
