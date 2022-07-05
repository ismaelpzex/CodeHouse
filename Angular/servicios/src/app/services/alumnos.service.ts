import { InvokeFunctionExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrAlumnos: Alumno[] = [];
  private id: number = 5;

  constructor() {

    this.arrAlumnos = ALUMNOS;
  }

  getAll(): Alumno[] {
    return this.arrAlumnos;
  }
  getByLevel(level: string): Alumno[] {
    return this.arrAlumnos.filter(alumno => alumno.level.includes(level));
  }

  insert(data: any): any {
    data.id = this.id;
    let posicion = this.arrAlumnos.push(data);
    if (posicion) return { msg: 'Alumno insertado correctamente' }
    else return { msg: 'Error al insertar el alumno' }
  }
}
