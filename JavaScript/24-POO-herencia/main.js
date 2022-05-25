
//! HERENCIA
// CLASE PADRE
class CodeHouse {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }

    infoContacto() {
        console.log(`Nombre ${this.nombre}`, `Email ${this.email}`, `Aprobado ${this.aprobado}`)
    }
}

// CLASE HEREDADA DE CodeHouse, creamos la clase Alumno extends CodeHouse

class Alumno extends CodeHouse {
    constructor(nombre, email, curso) {
        super(nombre, email) // LLámamos al SuperConstructor para heredar las propiedades de su clase padre
        this.curso = curso
        this.aprobado = false
    }

    aprobar() {
        this.aprobado = true
    }
}

class Profesor extends CodeHouse {
    constructor(nombre, email, asignaturas) {
        super(nombre, email) // LLámamos al SuperConstructor para heredar las propiedades de su clase padre
        this.asignaturas = asignaturas
    }

    infoAsignaturas() {
        this.asignaturas.forEach((asignaturas, index) => {
            console.log(`${index + 1} : ${asignaturas}`)
        })
    }
}

const ismael = new Alumno('Ismael', 'ismaelpzex@gmail.com', 'FullStack Web Developer')
const ivan = new Profesor('Iván', 'test@test.es', ['HTML', 'CSS', 'JavaScript'])

ismael.infoContacto()
ivan.infoAsignaturas()
console.log(ismael)
console.log(ivan)
ismael.aprobar()
console.log(ismael)
console.log(ismael instanceof Alumno) // ismael es una instancia de Alumno?