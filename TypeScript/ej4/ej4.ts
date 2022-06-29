//crear un objeto que me permite manipular texto, esta clase no tendrá ninguna propiedad
// implementará de forma obligatoria 3 metodos

//el primer metodo me permitirá contar las letras de una frase que se pasa como argumento
//otro metodo que me permita saber cuantas veces está repetida una letra pasada por parámetro
//metodo que eilimine todos los espacios en blanco de la cadena ojo la cadena también puede tener espacios por delante y por detrás

interface IManipular {
    countTotal(frase: string): number;
    countLetter(frase: string, letter: string): number;
    deleteSpace(frase: string): string;
}


class Manipular implements IManipular {
    countTotal(frase: string): number {
        
        const frase2: string = frase.split(" ").join("");
        return frase2.length;
    }

    countLetter(frase: string, letter: string): number {
        let count: number = 0;
        for (let i: number = 0; i <= frase.length; i++){
            if (frase[i].toLocaleLowerCase() === letter.toLocaleLowerCase()) count++
        }
        return count;
    }

    deleteSpace(frase: string): string {
        const frase2: string = frase.split(" ").join("");
        return frase2
    }
}


const manipular: IManipular = new Manipular();

console.log(manipular.countTotal("  en un lugar de la mancha"));
console.log(manipular.countLetter("en un lugar de la mancha", "a"));
console.log(manipular.deleteSpace(" en un lugar de la mancha"));
