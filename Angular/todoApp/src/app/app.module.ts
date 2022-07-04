import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { FromComponent } from './components/from/from.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { TareasComponent } from './components/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    FromComponent,
    FiltrosComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
