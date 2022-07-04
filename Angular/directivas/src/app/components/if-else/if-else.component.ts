import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  estado: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(): void {
    this.estado = !this.estado;
  }
}
