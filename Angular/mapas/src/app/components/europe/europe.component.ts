import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { ContriesService } from 'src/app/services/contries.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {

  lat: number = 40.4169473
  long: number = -3.7035285
  countries: Country[] | any;
  constructor(
    private countriesServices: ContriesService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.countries = await this.countriesServices.getAll();
    console.log(this.countries);
  }

}
