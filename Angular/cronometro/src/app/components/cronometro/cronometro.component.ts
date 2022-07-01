import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() inicio: number = 0;
  @Input() fin: number = 0;
  @Output() finalizado: EventEmitter<string>;
  @Input() color: string = 'white'

  contador: number = 0;
  intervalo: any;
  estado: boolean = false;
  textoBoton: string = "Iniciar"


  constructor() {
    this.finalizado = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio;
  }

  startStop(): void {
    if (!this.estado) {
      this.start();
    } else {
      this.stop();
    }
  }

  start(): void {
    if (this.contador === this.fin) {
      this.contador = this.inicio;
      this.finalizado.emit('white');
    }
    this.intervalo = setInterval(() => {
      this.contador++;
      if (this.contador === this.fin) {
        this.stop();
        this.finalizado.emit(this.color);
      }
    }, 1000);
    this.textoBoton = 'Parar';
    this.estado = !this.estado;
  }

  stop(): void {
    clearInterval(this.intervalo);
    this.textoBoton = 'Iniciar';
    this.estado = !this.estado;
  }
}
