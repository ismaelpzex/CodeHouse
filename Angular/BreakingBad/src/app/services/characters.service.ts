import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string = 'https://www.breakingbadapi.com/api/';
  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(`${this.baseUrl}characters`));
  }

  getById(id: number): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(`${this.baseUrl}characters/${id}`));
  }

  getByName(name: string): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(`${this.baseUrl}characters?name=${name}`));
  }
}
