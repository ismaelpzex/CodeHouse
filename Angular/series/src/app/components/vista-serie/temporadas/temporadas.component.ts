import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

  temporadas: string[] = [];
  constructor(
    private seriesSerive: SeriesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe((params: any) => {
      let id: number = parseInt(params.idserie);
      this.temporadas = this.seriesSerive.getSeasons(id);
      console.log(this.temporadas)
    })
  }

}
