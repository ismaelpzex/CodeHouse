import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string = '';
  edad: number = 32;
  color: string = "azul";
  numeroAleatorio: number = Math.floor(Math.random() * 4);
  arrImagenes: any = [
    { name: 'Alfredo', url: 'https://randomuser.me/api/portraits/men/28.jpg' },
    { name: 'Lucia', url: 'https://randomuser.me/api/portraits/women/68.jpg' }
  ]
  constructor() {
    this.nombre = 'Ismael'
  }

  ngOnInit(): void {
  }

  sumar(a: number, b: number): string {
    return `El resultado de sumar ${a} y ${b} = <strong>${a + b}</strong>`
  }

}
