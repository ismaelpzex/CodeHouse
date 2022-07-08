import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent implements OnInit {

  servicios: Servicio[] = [];
  constructor(private serviviosService: ServiciosService) { }

  ngOnInit(): void {
    this.servicios = this.serviviosService.getAll();
  }

}
