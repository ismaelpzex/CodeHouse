import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  tareaFiltrada: any;
  @Output() tareaBuscadaTitulo: EventEmitter<any>;
  @Output() tareaBuscadaPrioridad: EventEmitter<any>;

  constructor() {
    this.tareaFiltrada = {
      titulo: "",
      prioridad: "",
    }

    this.tareaBuscadaTitulo = new EventEmitter();
    this.tareaBuscadaPrioridad = new EventEmitter();
  }

  ngOnInit(): void {
  }

  filtroTareasTitulo($event: any): void {
    this.tareaBuscadaTitulo.emit(this.tareaFiltrada)
  }
  filtroTareasPrioridad($event: any): void {
    this.tareaBuscadaPrioridad.emit(this.tareaFiltrada)
  }

}
