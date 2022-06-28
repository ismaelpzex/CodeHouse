"use strict";
exports.__esModule = true;
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(brand) {
        this.brand = brand;
    }
    Calculadora.prototype.add = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.subtrac = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.divide = function (a, b) {
        if (a === 0 || b === 0)
            return "No se puede dividir entre 0";
        return (a / b).toFixed(2);
    };
    Calculadora.prototype.multiply = function (a, b) {
        return a * b;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
;
