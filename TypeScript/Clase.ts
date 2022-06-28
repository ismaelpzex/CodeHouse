interface IPersona {
    name: string,
    age: number,
    cambiarEdad(edad: number): void;
    saludar(): string; 
}


class Persona implements IPersona{

    name: string;
    age: number;
    
    constructor(name: string, age: number = 0) {
        this.name = name,
        this.age = age;
    }

    cambiarEdad(edad: number): void {
        this.age = edad;
    }

    saludar(): string {
        return `Hola ${this.name}`
    };
};

let persona1 = new Persona('Ismael', 32);