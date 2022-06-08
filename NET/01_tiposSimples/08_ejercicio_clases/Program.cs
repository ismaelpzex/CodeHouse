using _08_ejercicio_clases.@class;

Persona Ismael = new Persona("Ismael", "de la Poza", 32);
Console.WriteLine("----------------------");
Console.WriteLine($"Nombre: {Ismael.Name}\nApellidos: {Ismael.LastName}\nEdad: {Ismael.Age}\naño nacimiento: {Ismael.ReturnYear()}");
Console.WriteLine("\n\npresiona una tecla para continuar");
Console.ReadKey();

Console.Clear();
Console.WriteLine("Vamos a cambiar la edad, inserta una edad");
int newAge;
bool key = int.TryParse(Console.ReadLine(), out newAge);

while (!key)
{
    Console.WriteLine(" Si no la introduces en numero, VAMOS MAL");
    key = int.TryParse(Console.ReadLine(), out newAge);
}
Ismael.ChangeAge(newAge);
Console.Clear();
Console.WriteLine($"Nombre: {Ismael.Name}\nApellidos: {Ismael.LastName}\nEdad: {Ismael.Age}\nAño nacimiento: {Ismael.ReturnYear()}");
