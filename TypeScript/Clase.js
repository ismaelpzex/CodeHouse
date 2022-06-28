var Persona = /** @class */ (function () {
    function Persona(name, age) {
        if (age === void 0) { age = 0; }
        this.name = name,
            this.age = age;
    }
    Persona.prototype.cambiarEdad = function (edad) {
        this.age = edad;
    };
    Persona.prototype.saludar = function () {
        return "Hola ".concat(this.name);
    };
    ;
    return Persona;
}());
;
var persona1 = new Persona('Ismael', 32);
