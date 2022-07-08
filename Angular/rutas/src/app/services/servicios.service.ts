import { Injectable } from '@angular/core';
import { SERVICIOS } from '../db/servicios.db';
import { Servicio } from '../interfaces/servicio.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private arrServicios: Servicio[] = [];
  constructor() {
    this.arrServicios = SERVICIOS;
  }

  getAll(): Servicio[] {
    return this.arrServicios;
  }

  getByUrl(url: string): Servicio | any {
    return this.arrServicios.find(servicio => servicio.url === url)
  }
}
