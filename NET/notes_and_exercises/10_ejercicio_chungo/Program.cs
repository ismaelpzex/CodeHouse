

using _10_ejercicio_chungo.Classes;

Persona[] arrayPersonas = new Persona[3];
arrayPersonas[0] = new Estudiante("mateo");
arrayPersonas[1] = new Estudiante("Andres");
arrayPersonas[2] = new Profesor("profe");

foreach (Persona person in arrayPersonas)
{
    Console.WriteLine(person.Name);
    if (person is Estudiante) (person as Estudiante).Estudiar();
    if (person is Profesor) (person as Profesor).Explicar();
}


