import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: number = 0;
  long: number = 0;

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    })
  }

}
