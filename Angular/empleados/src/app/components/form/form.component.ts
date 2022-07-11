import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento.interface';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  departamentos: Departamento[] | any
  constructor(
    private departamentosService: DepartamentosService,
    private empleadosService: EmpleadosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departamentos = this.departamentosService.getAll();
  }

  getDataForm(form: any) {
    form.value.departamento = parseInt(form.value.departamento);
    let response = this.empleadosService.addEmpleado(form.value);
    if (response.id) {
      this.router.navigate(['/empleados']);
    }
  }

}
