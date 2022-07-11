import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  arrEmpleados: Empleado[] | any;
  constructor(private empleadosServicio: EmpleadosService) {

  }

  ngOnInit(): void {
    this.arrEmpleados = this.empleadosServicio.getAll();
  }

}
