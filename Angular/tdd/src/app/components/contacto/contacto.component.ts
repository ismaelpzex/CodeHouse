import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  response: string = "";
  responseDelete: string = "";
  arrContactos: Contacto[]
  constructor(private contactosService: ContactosService) {
    this.arrContactos = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.arrContactos = this.contactosService.getAll();
  }


  add(contacto: Contacto): void {
    this.response = this.contactosService.add(contacto);
  }

  deleteContacto(id: number) {
    this.responseDelete = this.contactosService.delete(id);
  }
}
