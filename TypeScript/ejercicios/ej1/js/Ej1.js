//Dado un numero aleatorio entero hacer una aplicacion que me devuelva el factorial de un numero.
function factorial(numero) {
    var arrNum = [];
    var result = 1;
    for (var i = numero; i >= 1; i--) {
        arrNum.push(i);
        result = result * i;
    }
    return { serie: arrNum, resultado: result };
}
;
var miFactorial = factorial(5);
console.log("".concat(miFactorial.serie.join("*"), " = ").concat(miFactorial.resultado));
