import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() numeroEnviado: EventEmitter<number>;
  @Output() letraEnviada: EventEmitter<string>;
  miNumero: number = 0;
  letra: string = "";
  constructor() {
    this.numeroEnviado = new EventEmitter();
    this.letraEnviada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardar() {
    this.numeroEnviado.emit(this.miNumero);
  }

  guardarLetra() {
    this.letraEnviada.emit(this.letra);
  }
}
