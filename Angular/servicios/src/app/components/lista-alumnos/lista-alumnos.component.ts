import { Component, OnInit } from '@angular/core';
import { every } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: Alumno[] = [];
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAll();
  }

  selectLevel($event: any): void {
    this.alumnos = this.alumnosService.getByLevel($event.target.value);
  }

}
