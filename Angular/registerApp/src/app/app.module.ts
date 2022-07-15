import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHeaders } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { PresentComponent } from './components/present/present.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LogginComponent,
    PresentComponent,
    HeaderComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
