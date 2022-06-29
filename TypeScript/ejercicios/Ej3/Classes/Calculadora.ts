import ICalculadora from "../Interfaces/ICalculadora";

export class Calculadora implements ICalculadora {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    add(...numbers: number[]) {
        let resultado: number = 0;
        for (let numero of numbers) {
            resultado += numero;
        }
        return resultado;
    }
    subtrac(...numeros: number[]): number {
        let resultado: number = numeros[0];
        numeros.forEach((numero, index) => {
            if (index !== 0) resultado -= numero
        });
        return resultado;
    }
    divide(...numeros: number[]): number | string {
        let resultado: number = numeros[0];
        numeros.forEach((numero, index) => {
            if (numero === 0) return "No se puede dividir entre 0";
            if (index !== 0) resultado /= numero;
        });
        return resultado.toFixed(2);
    }
    multiply(...numbers: number[]): number {
        let resultado: number = 1;
        resultado = numbers.reduce((acumulado, actual)=> acumulado * actual);
        return resultado;
    }
};