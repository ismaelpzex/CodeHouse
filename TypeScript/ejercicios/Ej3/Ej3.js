"use strict";
exports.__esModule = true;
var Calculadora_1 = require("./Classes/Calculadora");
var a = 2;
var b = 3;
var casio = new Calculadora_1.Calculadora("Casio");
var hp = new Calculadora_1.Calculadora("HP");
var helect = new Calculadora_1.Calculadora("Helect");
var texasInstrument = new Calculadora_1.Calculadora("Texas Instrument");
console.log("\nMetodo suma calculadora ".concat(casio.brand, "\n").concat(a, " + ").concat(b, " = ").concat(casio.add(a, b), "\n"));
console.log("Metodo resta calculadora ".concat(hp.brand, "\n").concat(a, " - ").concat(b, " = ").concat(hp.subtrac(a, b), "\n"));
console.log("Metodo division calculadora ".concat(helect.brand, "\n").concat(a, " / ").concat(b, " = ").concat(helect.divide(a, 0), "\n"));
console.log("Metodo multiplicaci\u00F3n calculadora ".concat(texasInstrument.brand, "\n").concat(a, " * ").concat(b, " = ").concat(texasInstrument.multiply(a, b), "\n"));
// crear una aplicacion que me permita generar una calculadora de varias marcas, cada calculadora tiene que implementar obligatoriamente 3 metodos, sumar restar y multiplocar a parte de una marca.
//cuando generemos un objeto le pasaremos la marca de la calculadora y probaremos sus metodos.
