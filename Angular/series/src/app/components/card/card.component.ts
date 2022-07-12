import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { Serie } from 'src/app/interfaces/serie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: Personaje | Serie | any = {};
  ruta: string = "";
  nombre: string = "";
  rutaImg: string = "";
  @Input() cat: string = "";
  constructor() { }

  ngOnInit(): void {
    this.nombre = (this.item.titulo) ? this.item.titulo : this.item.nombre_real;
    this.ruta = (this.item.titulo) ? '/serie' : '/personaje';
    this.rutaImg = `background-image: url(${this.item.imagen})`
  }

}
