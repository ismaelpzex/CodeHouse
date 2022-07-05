import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  @Input() miAlumno: Alumno | any;
  constructor() { }

  ngOnInit(): void {
  }

}
