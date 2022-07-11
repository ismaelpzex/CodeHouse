import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento.interface';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-vista-empleados',
  templateUrl: './vista-empleados.component.html',
  styleUrls: ['./vista-empleados.component.css']
})
export class VistaEmpleadosComponent implements OnInit {

  empleado: Empleado | any
  departamento: Departamento | any

  constructor(
    private empleadosServicios: EmpleadosService,
    private departamentosServicios: DepartamentosService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idempleado);
      this.empleado = this.empleadosServicios.getById(id);
      this.departamento = this.departamentosServicios.getById(this.empleado.department);
    });
  }

  ChangeStatus(): void {
    this.empleado.status = !this.empleado.status;
  }

}
