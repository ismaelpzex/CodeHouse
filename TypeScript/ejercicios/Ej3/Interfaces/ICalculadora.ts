export default interface ICalculadora {
    
    brand: string;

    add(a: number, b: number): number;
    subtrac(a: number, b: number): number;
    divide(a: number, b: number): number | string;
    multiply(a: number, b: number): number;
} 
