//crear un objeto que me permite manipular texto, esta clase no tendrá ninguna propiedad
// implementará de forma obligatoria 3 metodos
var Manipular = /** @class */ (function () {
    function Manipular() {
    }
    Manipular.prototype.countTotal = function (frase) {
        var frase2 = frase.split(" ").join("");
        return frase2.length;
    };
    Manipular.prototype.countLetter = function (frase, letter) {
        var fraseTratada = frase.toLocaleLowerCase();
        var count = 0;
        for (var i = 0; i <= frase.length; i++) {
            if (fraseTratada[i] === letter.toLocaleLowerCase())
                count++;
        }
        return count;
    };
    Manipular.prototype.deleteSpace = function (frase) {
        var frase2 = frase.split(" ").join("");
        return frase2;
    };
    return Manipular;
}());
var manipular = new Manipular();
console.log(manipular.countTotal("  en un lugar de la mancha"));
console.log(manipular.countLetter("en un lugar de la mancha", "a"));
console.log(manipular.deleteSpace(" en un lugar de la mancha"));
