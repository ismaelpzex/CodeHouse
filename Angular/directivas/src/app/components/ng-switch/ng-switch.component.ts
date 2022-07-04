import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  productos: any[] = [];
  constructor() {
    this.productos = ['leche', 'huevos', 'pan', 'cereales', 'fruta', 'pescado'];
  }

  ngOnInit(): void {
  }

}
