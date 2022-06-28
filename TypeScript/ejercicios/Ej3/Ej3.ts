import {Calculadora} from "./Classes/Calculadora";

let a: number = 2;
let b: number = 3;

const casio: Calculadora = new Calculadora("Casio");
const hp: Calculadora = new Calculadora("HP");
const helect: Calculadora = new Calculadora("Helect");
const texasInstrument: Calculadora = new Calculadora("Texas Instrument");

console.log(`\nMetodo suma calculadora ${casio.brand}\n${a} + ${b} = ${casio.add(a, b)}\n`);
console.log(`Metodo resta calculadora ${hp.brand}\n${a} - ${b} = ${hp.subtrac(a, b)}\n`);
console.log(`Metodo division calculadora ${helect.brand}\n${a} / ${b} = ${helect.divide(a, 0)}\n`);
console.log(`Metodo multiplicación calculadora ${texasInstrument.brand}\n${a} * ${b} = ${texasInstrument.multiply(a, b)}\n`);


// crear una aplicacion que me permita generar una calculadora de varias marcas, cada calculadora tiene que implementar obligatoriamente 3 metodos, sumar restar y multiplocar a parte de una marca.

//cuando generemos un objeto le pasaremos la marca de la calculadora y probaremos sus metodos.