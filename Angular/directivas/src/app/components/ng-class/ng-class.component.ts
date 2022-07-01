import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  estilos: string = "textoRojo";
  azul: string = "fondoAzul";
  activo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarActivo() {
    this.activo = !this.activo;
  }
}
