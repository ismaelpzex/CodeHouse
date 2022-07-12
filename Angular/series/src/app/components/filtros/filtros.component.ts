import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  activate: boolean = true;
  canales: string[] = [];
  constructor(
    private router: Router,
    private seriesSerivce: SeriesService
  ) { }

  ngOnInit(): void {
    this.canales = this.seriesSerivce.getAllChannel();
    console.log(this.canales);
  }

  ngDoCheck(): void {
    let path = window.location.pathname;
    this.activate = (path.includes('personaje')) ? false : true;
  }

  capturarCanal($event: any): void {
    if ($event.target.value === 'todas') this.router.navigate(['/series'])
    else this.router.navigate(['/canal', $event.target.value])
  }

}
