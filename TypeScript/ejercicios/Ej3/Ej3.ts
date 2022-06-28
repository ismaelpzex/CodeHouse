import {Calculadora} from "./Classes/Calculadora";
const a: number = 2;
const b: number = 3;
let casio: Calculadora = new Calculadora("Casio");
let hp: Calculadora = new Calculadora("HP");
let helect: Calculadora = new Calculadora("Helect");
let texasInstrument: Calculadora = new Calculadora("Texas Instrument");

console.log(`\nMetodo suma calculadora ${casio.brand}\n${a} + ${b} = ${casio.add(a, b)}\n`);
console.log(`Metodo resta calculadora ${hp.brand}\n${a} - ${b} = ${hp.subtrac(a, b)}\n`);
console.log(`Metodo division calculadora ${helect.brand}\n${a} / ${b} = ${helect.divide(a, 0)}\n`);
console.log(`Metodo multiplicación calculadora ${texasInstrument.brand}\n${a} * ${b} = ${texasInstrument.multiply(a, b)}\n`);


// crear una aplicacion que me permita generar una calculadora de varias marcas, cada calculadora tiene que implementar obligatoriamente 3 metodos, sumar restar y multiplocar a parte de una marca.

//cuando generemos un objeto le pasaremos la marca de la calculadora y probaremos sus metodos.