import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private arrProductos: Producto[] = [];
  constructor() {
    this.arrProductos = PRODUCTOS;
  }

  /** 
  * @memberof ProductosServices
  * @author Ismael de la Poza
  * @date 11/07/2022
  * @function getAll()
  * @description Devuelve el array de productos completo
  * @params none
  * @return [{producto}] Producto[]
  */

  getAll(): Producto[] {
    return this.arrProductos;
  }

  /** 
* @memberof ProductosServices
* @author Ismael de la Poza
* @date 11/07/2022
* @function getById(param)
* @description Devuelve un producto por id
* @params (number) id
* @return {*} | {producto | any}
*/

  getById(id: number): Producto | any {
    return this.arrProductos.find(producto => producto.id === id)
  }
}
