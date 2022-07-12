import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-vista-serie',
  templateUrl: './vista-serie.component.html',
  styleUrls: ['./vista-serie.component.css']
})
export class VistaSerieComponent implements OnInit {

  serie: Serie | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = parseInt(params.idserie);
      this.serie = this.seriesService.getById(id);
    })
  }

}
