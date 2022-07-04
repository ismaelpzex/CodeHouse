import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  visible: boolean = true;
  seccionActual: string = 'sobremi';
  constructor() { }

  ngOnInit(): void {
  }

  cargarSeccion(seccion: string): void {
    this.seccionActual = seccion;
  }

}
