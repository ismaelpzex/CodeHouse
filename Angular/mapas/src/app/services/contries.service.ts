import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {

  countries: Country[] | any;
  baseUrl: string = 'https://restcountries.com/v3.1/'
  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll(region: string = 'europe'): Promise<Country[]> {
    return lastValueFrom(this.httpClient.get<Country[]>(`${this.baseUrl}region/${region}`));
  }

  getByCode(code: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}alpha/${code}`)
  }
}
