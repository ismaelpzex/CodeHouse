//Dado un numero aleatorio entero hacer una aplicacion que me devuelva el factorial de un numero.


function factorial(numero: number): any {
    let arrNum: number[] = [];
    let result: number = 1;
    for (let i: number = numero; i >= 1; i--) {
        arrNum.push(i) 
        result = result * i;
    }
    return {serie: arrNum, resultado: result};
};

let miFactorial: any = factorial(5);
console.log(`${miFactorial.serie.join("*")} = ${miFactorial.resultado}`);
