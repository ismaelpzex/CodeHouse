import { Component, Input, Output } from '@angular/core';
import { TareasComponent } from './components/tareas/tareas.component';
import { Alert } from './interfaces/alert.interface';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todasTareas: Tarea[] = [];
  id: number = 4;
  misTareas: Tarea[] = [];
  miAlerta: Alert | any;

  constructor() {
    this.todasTareas = [
      {
        id: 1,
        titulo: 'Estudiar Angular',
        prioridad: 'urgente'
      },
      {
        id: 2,
        titulo: 'Sacar al perro',
        prioridad: 'diaria'
      },
      {
        id: 3,
        titulo: 'Leer un libro',
        prioridad: 'mensual'
      },
    ]
    this.misTareas = this.todasTareas;
  }

  borrarTarea($event: number): void {
    this.todasTareas = this.todasTareas.filter((value) => value.id !== $event);
    this.misTareas = this.todasTareas;
    this.miAlerta = {
      text: 'Tarea borrada correctamente',
      type: 'success',
      status: true
    }
  }

  guardarTarea($event: any): boolean {
    if ($event.prioridad !== "" && $event.titulo !== "") {
      let posicion: number = this.misTareas.findIndex(tarea => tarea.titulo.toLowerCase() === $event.titulo.toLowerCase() && tarea.prioridad === $event.prioridad)
      if (posicion !== -1) {
        this.miAlerta = {
          text: 'Tarea duplicada',
          type: 'danger',
          status: true,
        }
        return false
      }
      $event.id = this.id;
      this.misTareas.push($event);
      this.todasTareas = this.misTareas;
      this.id++
      this.miAlerta = {
        text: 'Tarea insertada correctamente',
        type: 'success',
        status: true
      }
    } else {
      this.miAlerta = {
        text: 'Los campos no pueden estar vacíos',
        type: 'danger',
        status: true
      }
    }
    return true;
  }

  buscarTareaTitulo($event: any): void {
    this.misTareas = this.todasTareas.filter(value => value.titulo.toLowerCase().includes($event.titulo.toLowerCase()));
  }

  buscarTareaPrioridad($event: any): void {
    this.misTareas = this.todasTareas.filter(value => value.prioridad.includes($event.prioridad));
    console.log($event.prioridad)
  }
}
