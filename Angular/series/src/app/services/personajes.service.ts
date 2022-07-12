import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private personajes: Personaje[] = [];
  constructor() {
    this.personajes = PERSONAJES;
  }

  /**
* @memberof PersonajesSerices
* @author Ismael de la Poza
* @date 11/7/2022
* @function getById()
* @description retorna el array de personajes
* @returns {*} {Personaje[]}
*/
  getAll(): Personaje[] {
    return this.personajes;
  }

  /**
* @memberof PersonajesSerices
* @author Ismael de la Poza
* @date 11/7/2022
* @function getById()
* @description Retorna un personaje por ID
* @params {number} id
* @returns {*} {Personaje | any}
*/

  getById(id: number): Personaje | any {
    return this.personajes.find(personaje => personaje.id === id)
  }

  /**
   * @memberof PersonajesServices
   * @author Ismael de la Poza
   * @date 12/7/2022
   * @function getBySerie
   * @description Retorna un array de personajes
   */
  getBySerie(id: number): Personaje[] {
    return this.personajes.filter(personaje => personaje.serie === id);
  }
}
