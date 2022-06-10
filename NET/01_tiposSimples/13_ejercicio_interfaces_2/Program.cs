using _13_ejercicio_interfaces_2.Classes;

Perro tobby = new Perro();
Console.WriteLine("Introduce el nombre del bicho-perro");
string name = Console.ReadLine();
tobby.SetName(name);
Console.WriteLine("Pulsa una tecla para continuar");
Console.ReadKey();
Console.Clear();
tobby.GetName();
tobby.Comer();

