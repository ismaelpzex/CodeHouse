import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { Serie } from 'src/app/interfaces/serie.interface';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {

  items: Serie[] | Personaje[] | any[] = [];
  canal: string = "";
  titulo: string = "";

  constructor(
    private seriesService: SeriesService,
    private personajesService: PersonajesService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.titulo = this.activeRoute.snapshot.url[0].path;
    this.items = this.titulo === 'series' ? this.seriesService.getAll() : this.personajesService.getAll();
  }

  ngDoCheck() {
    let response = this.activeRoute.snapshot.url;
    if (response.length > 1) {
      this.canal = response[1].path;
      this.items = this.seriesService.getByChannel(this.canal);
    }
  }

}
