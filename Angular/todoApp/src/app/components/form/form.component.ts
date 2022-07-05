import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nuevaTarea: any;
  @Input() tareaDuplicada: boolean;
  @Output() tareaEmitida: EventEmitter<any>;


  constructor() {

    this.nuevaTarea = {
      titulo: "",
      prioridad: "",
    }

    this.tareaEmitida = new EventEmitter();
    this.tareaDuplicada = false;
  }

  ngOnInit(): void {
  }

  obtenerDatos(): void {
    //mandamos la tarea a app.component
    this.tareaEmitida.emit(this.nuevaTarea);
    this.nuevaTarea = {
      titulo: "",
      prioridad: "",
    }

  }
}
