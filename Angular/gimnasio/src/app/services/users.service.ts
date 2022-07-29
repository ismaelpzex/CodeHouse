import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'http://localhost:3000/'
  constructor(
    private httpClient: HttpClient,
  ) { }

  register(data: any) {
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}api/users/register`, data));
  }

  login(data: any) {
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}api/users/login`, data))
  }

  isLogged(): boolean {
    if (localStorage.getItem('token_gym')) return true;
    else return false;
  }
}
