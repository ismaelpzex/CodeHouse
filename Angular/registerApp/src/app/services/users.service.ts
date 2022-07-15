import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlRegister: string = 'https://register-codehouse-app.herokuapp.com/register';
  private urlLoggin: string = 'https://register-codehouse-app.herokuapp.com/login';
  private urlPresent: string = 'https://register-codehouse-app.herokuapp.com/premio'
  constructor(
    private httpClient: HttpClient,

  ) { }

  register(form: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.urlRegister, form))
  }

  loggin(form: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.urlLoggin, form));
  }

  getPresent(token: string): Promise<any> {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'user-token': token
      }),
    }
    return lastValueFrom(this.httpClient.get<any>(this.urlPresent, httpOptions))
  }
}
