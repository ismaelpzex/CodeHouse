import ICalculadora from "../Interfaces/ICalculadora";

export class Calculadora implements ICalculadora{
    brand: string;

    constructor (brand: string) {
        this.brand = brand;
    }

    add(a: number, b: number): number {
        return a + b;
    }
    subtrac(a: number, b: number): number {
        return a - b;
    }
    divide(a: number, b: number): number | string {
        if (a === 0 || b === 0) return "No se puede dividir entre 0"
        return a/b
    }
    multiply(a: number, b: number): number{
        return a * b;
    }
};