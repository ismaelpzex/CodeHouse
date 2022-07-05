import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Input() tareas: Tarea[] = [];
  @Output() tareaBorrada: EventEmitter<number>;
  constructor() {
    this.tareaBorrada = new EventEmitter();
  }

  ngOnInit(): void {

  }

  borrarTarea($event: number): void {
    this.tareaBorrada.emit($event);
  }

}
