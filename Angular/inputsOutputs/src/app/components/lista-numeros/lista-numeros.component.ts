import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css']
})

export class ListaNumerosComponent implements OnInit {
  @Input() numeros: number[] = [];
  @Input() letras: string[] = [];
  resultado: string = "";
  resultadoLetra: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.cargarDatos();
    this.cargarLetras();
  }

  cargarDatos(): void {
    this.resultado = this.numeros.join(", ");
  }

  cargarLetras(): void {
    this.resultadoLetra = this.letras.join(", ");
  }

}
