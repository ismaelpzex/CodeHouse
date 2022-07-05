import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newAlumno: any;
  constructor(private alumnosService: AlumnosService) {
    this.newAlumno = {
      name: "",
      mail: "",
      age: 0,
      level: ""
    }
  }

  ngOnInit(): void {
  }

  getDataForm() {
    let response = this.alumnosService.insert(this.newAlumno)
    alert(response.msg)
  }
}
