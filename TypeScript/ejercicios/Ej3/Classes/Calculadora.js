"use strict";
exports.__esModule = true;
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(brand) {
        this.brand = brand;
    }
    Calculadora.prototype.add = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        var resultado = 0;
        for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
            var numero = numbers_1[_a];
            resultado += numero;
        }
        return resultado;
    };
    Calculadora.prototype.subtrac = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        var resultado = numeros[0];
        numeros.forEach(function (numero, index) {
            if (index !== 0)
                resultado -= numero;
        });
        return resultado;
    };
    Calculadora.prototype.divide = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        var resultado = numeros[0];
        numeros.forEach(function (numero, index) {
            if (numero === 0)
                return "No se puede dividir entre 0";
            if (index !== 0)
                resultado /= numero;
        });
        return resultado.toFixed(2);
    };
    Calculadora.prototype.multiply = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        var resultado = 1;
        resultado = numbers.reduce(function (acumulado, actual) { return acumulado * actual; });
        return resultado;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
;
