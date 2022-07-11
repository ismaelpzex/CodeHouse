import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleado-card',
  templateUrl: './empleado-card.component.html',
  styleUrls: ['./empleado-card.component.css']
})
export class EmpleadoCardComponent implements OnInit {

  @Input() miEmpleado: Empleado | any;
  constructor() { }

  ngOnInit(): void {
  }

  ChangeStatus() {
    this.miEmpleado.status = !this.miEmpleado.status;
  }
}
