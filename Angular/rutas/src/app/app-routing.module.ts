import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NutricionalComponent } from './components/vista-producto/nutricional/nutricional.component';
import { OpinionesComponent } from './components/vista-producto/opiniones/opiniones.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';
import { VistaServicioComponent } from './components/vista-servicio/vista-servicio.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' }, //siempre la primera
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mis-servicios', component: ListaServiciosComponent },
  { path: 'servicios/:url', component: VistaServicioComponent },
  { path: 'productos', component: ProductosComponent },
  {
    path: 'producto/:idproducto', component: VistaProductoComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'opiniones' },
      { path: 'opiniones', component: OpinionesComponent },
      { path: 'valores-nutricionales', component: NutricionalComponent },
    ]
  },
  { path: '**', component: C404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
