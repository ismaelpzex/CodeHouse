import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaItemsComponent } from './components/lista-items/lista-items.component';
import { CardComponent } from './components/card/card.component';
import { VistaPersonajeComponent } from './components/vista-personaje/vista-personaje.component';
import { VistaSerieComponent } from './components/vista-serie/vista-serie.component';
import { RepartoComponent } from './components/vista-serie/reparto/reparto.component';
import { TemporadasComponent } from './components/vista-serie/temporadas/temporadas.component';
import { FiltrosComponent } from './components/filtros/filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaItemsComponent,
    CardComponent,
    VistaPersonajeComponent,
    VistaSerieComponent,
    RepartoComponent,
    TemporadasComponent,
    FiltrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
