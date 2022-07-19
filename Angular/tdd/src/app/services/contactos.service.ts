import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  contactos: Contacto[]
  id: number = 0;
  constructor() {
    this.contactos = [
      {
        id: 1,
        name: 'ismael',
        mail: 'test',
        phone: '22'
      }
    ];
  }

  getAll(): Contacto[] {
    return this.contactos;
  }

  add(contacto: Contacto): string {
    contacto.id = this.id;
    this.contactos.push(contacto);
    this.id++
    return "insertado"
  }

  delete(id: number) {
    this.contactos = this.contactos.filter(contacto => {
      contacto.id !== id
    })
    return 'borrado';
  }
}
