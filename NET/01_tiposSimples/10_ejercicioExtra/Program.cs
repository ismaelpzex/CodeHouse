using _10_ejercicioExtra.classes;

Alumno a1 = new Alumno("Ismael");
Alumno a2 = new Alumno("Adrián");
Profesor p1 = new Profesor("Pedro");

Persona[] arrayPersonas = { a1, a2, p1 };

foreach (Persona persona in arrayPersonas)
{
    if (persona is Profesor) (persona as Profesor).Explicar();
    if (persona is Alumno) (persona as Alumno).Estudiar();
}