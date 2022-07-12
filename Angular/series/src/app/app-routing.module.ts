import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaItemsComponent } from './components/lista-items/lista-items.component';
import { VistaPersonajeComponent } from './components/vista-personaje/vista-personaje.component';
import { RepartoComponent } from './components/vista-serie/reparto/reparto.component';
import { TemporadasComponent } from './components/vista-serie/temporadas/temporadas.component';
import { VistaSerieComponent } from './components/vista-serie/vista-serie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'series' },
  {
    path: 'series', component: ListaItemsComponent,
  },
  { path: 'personajes', component: ListaItemsComponent },
  {
    path: 'serie/:idserie', component: VistaSerieComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'reparto' },
      { path: 'reparto', component: RepartoComponent },
      { path: 'temporadas', component: TemporadasComponent },
    ]
  },
  { path: 'canal/:nombrecanal', component: ListaItemsComponent },
  { path: 'personaje/:idpersonaje', component: VistaPersonajeComponent },
  { path: '**', redirectTo: 'series' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
