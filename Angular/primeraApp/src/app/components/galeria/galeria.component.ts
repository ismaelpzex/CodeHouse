import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  arrImagenes: any[] = [];
  imagenActual: number = 0;
  constructor() {
    this.arrImagenes = [
      { url: './assets/images/1.png', title: 'Título de la imagen 1' },
      { url: './assets/images/2.png', title: 'Título de la imagen 2' },
      { url: './assets/images/3.png', title: 'Título de la imagen 3' },
      { url: './assets/images/4.png', title: 'Título de la imagen 4' },
    ]
  }

  ngOnInit(): void {
  }

  cambiarImagen($event: any) {

    if ($event.target.innerText === "NEXT")
      this.imagenActual = (this.imagenActual == this.arrImagenes.length - 1) ? 0 : this.imagenActual + 1;
    else
      this.imagenActual = (this.imagenActual === 0) ? this.arrImagenes.length - 1 : this.imagenActual - 1;
  };
}
