import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/interfaces/country.interface';
import { ContriesService } from 'src/app/services/contries.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  countries!: Observable<Country[]>;
  constructor(
    private countriesService: ContriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      // this.country = await this.countriesService.getByCode(params.code);
      // console.log(this.country)
      let code: string = params.code;
      this.countries = this.countriesService.getByCode(code)

    })
  }

}
