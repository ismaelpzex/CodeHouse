let nombre: string = 'Ismael';
let numero: number = 0;
let estado: boolean = false;
let numer

numer = "3";

console.log(numer * 5);

//dos formas de tipar un array

//! Opcion 1
const arrNum: number[] = [1, 2, 3, 4, 5, 6];

//! Opcion 2
const arrNombre: Array<string> = ['Ismael', 'Juán', 'Perico', 'Andrés'];


//tipado de funciones

// función declarativa
function sumar(a: number, b: number): void {
    console.log(a + b);
};


//funcion expresiva
const restar = function (a: number, b: number): number {
    return a - b;
};

const multiplicar = (a: number, b: number): number => a * b;

//! Petición a una api sin saber lo que voy a recibir

let valor: any = 'hola';
let valor2: any = 2;
let alumno: any = {
    nombre: 'Ismael',
    edad: 32,
    casado: false
};