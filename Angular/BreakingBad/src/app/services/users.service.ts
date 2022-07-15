import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'https://register-codehouse-app.herokuapp.com/'
  constructor(
    private httpClient: HttpClient
  ) { }

  login(formValue: User): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}login`, formValue));
  }
}
