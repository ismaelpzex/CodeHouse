using _09_ejercicio_chungo.classes;

Persona persona = new Persona()
{
    Name = "Germán",
    Edad = 30
};

persona.Saludar();

Estudiante estudiante = new Estudiante()
{
    Name = "Ismael"
};

estudiante.SetEdad(32);
estudiante.Saludar();
estudiante.VerEdad();
estudiante.Estudiar();

Profesor profesor = new Profesor()
{
    Name = "Pedro"
};

profesor.SetEdad(40);
profesor.Explicar();



