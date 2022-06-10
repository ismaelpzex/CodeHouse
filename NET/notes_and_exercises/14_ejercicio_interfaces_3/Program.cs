using _14_ejercicio_interfaces_3.Classes;

Persona Estudiante = new Estudiante();
Console.WriteLine("Inserta un nombre");
Estudiante.SetName(Console.ReadLine());
Console.WriteLine("Inserta edad");
int NewAge;
int.TryParse(Console.ReadLine(), out NewAge);
Estudiante.SetAge(NewAge);
Console.WriteLine("Inserta una asignatura");
(Estudiante as Estudiante).SetSubject(Console.ReadLine());

Console.WriteLine($"Me llamo {Estudiante.GetName()}\nNací en {Estudiante.GetBornAge()}\nEstoy estudiando {(Estudiante as Estudiante).GetSubject()}");
