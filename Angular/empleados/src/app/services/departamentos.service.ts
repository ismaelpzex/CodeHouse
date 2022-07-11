import { Injectable } from '@angular/core';
import { DEPARTAMENTOS } from 'src/db/departamentos.db';
import { Departamento } from '../interfaces/departamento.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private arrDepartamentos: Departamento[];
  constructor() {
    this.arrDepartamentos = DEPARTAMENTOS;
  }

  getAll(): Departamento[] {
    return this.arrDepartamentos;
  }

  getById(id: number): Departamento | any {
    return this.arrDepartamentos.find(departamento => departamento.id === id)
  }
}
