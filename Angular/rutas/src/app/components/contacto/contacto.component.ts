import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recogerDatos(formContact: any): void {
    if (formContact.value.nombre.trim() !== "" && formContact.value.email.trim() !== "") {
      alert('mensaje enviado correctamente');
      this.router.navigate(['/mis-servicios']);
    }

  }
}
