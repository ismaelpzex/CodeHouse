import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  arrContactos: Contacto[] = [];
  resultado: string = "";
  constructor() {
    this.arrContactos = [
      { id: 1, name: 'Juan', phone: 666666666 },
      { id: 2, name: 'Perico', phone: 666666667 },
      { id: 3, name: 'Andres', phone: 666666668 },
      { id: 4, name: 'Ismael', phone: 666666669 },
      { id: 5, name: 'Carmen', phone: 666666665 },
    ];

  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos($event: any = ""): void {
    this.resultado = "";
    let busqueda: string = ($event !== "") ? $event.target.value : "";
    console.log(busqueda)
    this.arrContactos.forEach((contacto) => {
      if (contacto.name.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
        this.resultado += `<li>${contacto.name} : ${contacto.phone}</li>`
    })
  }
}
