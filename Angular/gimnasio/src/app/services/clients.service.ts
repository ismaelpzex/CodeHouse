import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl: string = 'http://localhost:3000/api/clients/'
  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl));
  }

  create(formValues: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, formValues));
  }
}
