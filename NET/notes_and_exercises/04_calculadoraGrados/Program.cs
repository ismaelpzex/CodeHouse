int celsius;
bool key;
Console.WriteLine("Introduce grados Celsius");
key = int.TryParse(Console.ReadLine(), out celsius);

while (!key)
{
    Console.WriteLine(" ERROR ! Introduce grados Celsius");
    key = int.TryParse(Console.ReadLine(), out celsius);
}

int kelvin = celsius + 273;
int fh = celsius * 18 / 10 + 32;
Console.WriteLine($"Grados celsius -> {celsius}");
Console.WriteLine($"Grados Kelvin -> {kelvin}");
Console.WriteLine($"Grados fh -> {fh}");
