import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  @Input() miTarea: Tarea | any;
  @Output() tareaBorrada: EventEmitter<number>;
  constructor() {
    this.tareaBorrada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  borrarTarea(id: number): void {
    // se lo tengo que enviar a su padre, Output
    this.tareaBorrada.emit(id);
  }

}
