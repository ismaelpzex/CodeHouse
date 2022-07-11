import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { C404Component } from './components/c404/c404.component';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { VistaServicioComponent } from './components/vista-servicio/vista-servicio.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';
import { OpinionesComponent } from './components/vista-producto/opiniones/opiniones.component';
import { NutricionalComponent } from './components/vista-producto/nutricional/nutricional.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    HeaderComponent,
    C404Component,
    ListaServiciosComponent,
    VistaServicioComponent,
    ProductosComponent,
    ProductoCardComponent,
    VistaProductoComponent,
    OpinionesComponent,
    NutricionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
