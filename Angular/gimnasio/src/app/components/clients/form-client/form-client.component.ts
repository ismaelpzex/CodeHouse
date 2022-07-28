import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientsService: ClientsService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      genero: new FormControl(),
      cuota: new FormControl(),
      fecha_nacimiento: new FormControl(),
      dni: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.clientsService.create(this.formulario.value);
      console.log(response);
    } catch (err: any) {
      console.log(err.message);
    }
  }
}
