import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';

import { DetailsComponent } from './details/details.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent,
    CadastroComponent,
    DetailsComponent,
    AtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
