import { Injectable } from '@angular/core';
import { EMPLEADOS } from 'src/db/empleados.db';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private arrEmpleados: Empleado[]
  private id: number = 5;
  constructor() {
    this.arrEmpleados = EMPLEADOS;
  }

  getAll(): Empleado[] {
    return this.arrEmpleados;
  }

  getById(id: number): Empleado | any {
    return this.arrEmpleados.find(empleado => empleado.id === id)
  }

  addEmpleado(form: any): any {
    form.status = true;
    form.id = this.id;
    let newId = this.arrEmpleados.push(form);
    this.id++;
    return { id: form.id };
  }
}
