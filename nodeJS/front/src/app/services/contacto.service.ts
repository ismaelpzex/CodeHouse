import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  baseUrl: string = 'http://localhost:3000/api/contactos/'
  constructor(
    private httpClient: HttpClient
  ) { }

  create(fd: FormData): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, fd));
  }
}
