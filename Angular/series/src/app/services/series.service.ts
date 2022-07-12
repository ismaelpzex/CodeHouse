import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private series: Serie[] = [];
  constructor() {
    this.series = SERIES;
  }

  /**
   * @memberof SeriesService
   * @author Ismael de la Poza
   * @date 11/7/2022
   * @function getAll()
   * @description Retorna el array de todas las series
   * @returns {*} {Serie[]}
   */
  getAll(): Serie[] {
    return this.series;
  }

  /**
 * @memberof SeriesService
 * @author Ismael de la Poza
 * @date 11/7/2022
 * @function getById()
 * @description Retorna una serie por ID
 * @params {number} id
 * @returns {*} {Serie | any}
 */
  getById(id: number): Serie | any {
    return this.series.find(serie => serie.id === id);
  }

  /** 
    * @memberof SeriesService
    * @author Ismael de la Poza
    * @date 12/7/2022
    * @function getSeasons()
    * @description Retorna un array de string o algo nulo
    * @params {number} id
    * @returns {*} {string[] | any}
    */

  getSeasons(id: number): string[] | any {
    return this.series.find(serie => serie.id === id)?.temporadas;
  }

  /** 
  * @memberof SeriesService
  * @author Ismael de la Poza
  * @date 12/7/2022
  * @function getAllChannel()
  * @description Retorna un array de string
  * @params none
  * @returns {*} {string[]}
  */

  getAllChannel(): string[] {
    let channels: string[] = this.series.map(serie => serie.canal);
    channels = [...new Set(channels)]
    return channels;
  }

  getByChannel(canal: string): Serie[] {
    return this.series.filter(serie => serie.canal === canal)
  }
}
