import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-vista-servicio',
  templateUrl: './vista-servicio.component.html',
  styleUrls: ['./vista-servicio.component.css']
})
export class VistaServicioComponent implements OnInit {

  servicio: Servicio | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviciosSerive: ServiciosService,
  ) { }

  ngOnInit(): void {
    //activatedRoute permite capturar la parte dinamica de la ruta. Tiene un método, params, que es un observable.

    this.activatedRoute.params.subscribe((params: any) => {

      let url: string = params.url //el valor url es el mismo que hemos puesto en el routing, la variable de la parte dinamica de la ruta.
      // con esta url llamo al servicio para pedirle el servicio que tenga esa url.
      this.servicio = this.serviciosSerive.getByUrl(url);
    })
  }

}
