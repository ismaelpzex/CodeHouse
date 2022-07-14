import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl: string = 'https://rickandmortyapi.com/api/character';
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(page: string = this.baseUrl): Observable<any> {
    // los obsevables no se gestionan con promesas, se gestionan con suscribe
    return this.httpClient.get<any>(page);
  }

  getById(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  getByName(name: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/?name=${name}`);
  }
}
