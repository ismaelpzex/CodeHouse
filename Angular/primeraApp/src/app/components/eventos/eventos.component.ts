import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  color: string = "blue";
  texto: string = "";
  textoCiudad: string = "";
  ciudades: any = [
    {ciudad: "Jaén", comunidad: "andalucia"},
    {ciudad: "Córdoba", comunidad: "andalucia"},
    {ciudad: "Sevilla", comunidad: "andalucia"},
    {ciudad: "Cádiz", comunidad: "andalucia"},
    {ciudad: "Huelva", comunidad: "andalucia"},
    {ciudad: "Malaga", comunidad: "andalucia"},
    {ciudad: "Granada", comunidad: "andalucia"},
    {ciudad: "Almería", comunidad: "andalucia"},
    {ciudad: "Madrid", comunidad: "madrid"},
    {ciudad: "A Coruña", comunidad: "galicia"},
    {ciudad: "Lugo", comunidad: "galicia"},
    {ciudad: "Ourense", comunidad: "galicia"},
    {ciudad: "Pontevedra", comunidad: "galicia"},
  ] ;
  resultadoComunidades: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  cambiarColor($event: any): void {
    this.color = $event.target.value;
  }

  capturarTexto($event: any): void {
    this.texto = $event.target.value;
  }

  capturarCiudad($event: any) : void {
    if ($event.target.value === "") this.textoCiudad = 'No vivo en ninguna de estas ciudades';
    else this.textoCiudad = `Vivo en la ciudad de ${$event.target.value}`;
  }

  printarCiudades($event: any) : void {
    const array: string[] = [];
    this.ciudades.forEach((value: any) => {
        if ($event.target.value === value.comunidad) array.push(value.ciudad); 
    });
    this.resultadoComunidades = array.join(", ");
  }
}
