// Expresiones regulares

let exp = /^\S+\@\S+\.\S+/
let text = 'juan@gmail.com'

console.log(exp.test(text));

// DNI 

let exp2 = /^\d{8}\[A-Za-z]/