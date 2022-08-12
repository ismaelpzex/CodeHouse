import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  formulario: FormGroup;
  files: any[] = [];
  constructor(
    private contactoService: ContactoService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl()
    })
  }

  ngOnInit(): void {
  }
  imagen: string = ''
  async onSubmit(): Promise<void> {
    const { nombre, apellidos, direccion, telefono } = this.formulario.value
    const fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre', nombre);
    fd.append('apellidos', apellidos);
    fd.append('direccion', direccion);
    fd.append('telefono', telefono);
    try {
      const response = await this.contactoService.create(fd);
      this.imagen = response.imagen;
      console.log(response.imagen);

    } catch (err: any) {
      console.log(err.message);
    }

  }

  onChange($event: any) {
    this.files = $event.target.files
  }
}
