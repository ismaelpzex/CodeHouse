import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //Importamos el httpClientModule (HOJO QUE NO SE IMPORTA SOLA) en el AppModule y después lo inyectamos
  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = 'https://reqres.in/api/users'

  getByPage(page: number = 1): Promise<any> {
    //httpClient devuelve un observable (elemento de angular que permite hacer consultas asincronas) lo convertiremos en una promesa con el metodo lastValueFrom() (PARSEADOR DE OBSERVABLES A PROMESAS)
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${page}`));
  }

  getById(id: number): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/${id}`))
  }

  create(request: any): Promise<any> {
    //peticion http post CON CABECERA para validar el token y saber tipo de fichero que envias. INTERCEPTORS
    const httpOptions: any = {
      headers: new HttpHeaders({
        "Content-type": "apllication/json",
        "authorization": "tokenCorrespondiente",
      }),
    }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, request, httpOptions))
  }

  update(formValue: User): Promise<any> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/${formValue.id}`,
      formValue))
  }

  delete(id: number): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}/${id}`));
  }

}
