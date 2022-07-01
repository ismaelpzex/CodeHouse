import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  fontSize: number = 20;
  bgColor: string = 'blue';
  propiedad: string = "";
  estilo: any = {};
  valor: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  changeFont($event: any) {
    this.fontSize = $event.target.value;
  }

  aplicaEstilo() {
    this.estilo[this.propiedad] = this.valor;
    console.log(this.estilo)
  }

}
