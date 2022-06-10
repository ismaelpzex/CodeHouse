string cadena = "Hola";
Console.WriteLine($"La {cadena.IndexOf("l") + 1} letra es la \"l\"");
Console.WriteLine($"La longitud de hola es {cadena.Length}");
Console.WriteLine($"Una subcadena de {cadena} es {cadena.Substring(1)}");
string frase = "Estoy dando una clase de .NET";
Console.WriteLine($"Estoy dando una clase de {frase.Replace(".NET", "Angular")}");

string[] arrayPalabras = frase.Split(" ");

for (int i = 0; i < arrayPalabras.Length; i++)
{
    if (arrayPalabras[i] == "Estoy" || arrayPalabras[i] == "clase")
    {
       arrayPalabras[i] = arrayPalabras[i].ToUpper();

    }
}

string frase2 = string.Join(" ", arrayPalabras);

Console.WriteLine(frase2);
Console.WriteLine(arrayPalabras.Length);
int position = 0;

for (int i = 0; i < arrayPalabras.Length; i++)
{
    if (arrayPalabras[i] == ".NET") position = i + 1;
    break;
}

Console.WriteLine(position);

string texto = "Estoy probando implementaciones de cadenas";
Console.WriteLine($"longitud total de la cadena {texto.Length}");
string[] palabrasTexto = texto.Split(" ");
Console.WriteLine($"El texto tiene {palabrasTexto.Length} palabras");
Console.WriteLine($"{texto.Replace("probando", "estudiando")}");

int posicion = 0;
foreach (string item in palabrasTexto)
{
    ++posicion;
    if (item == "implementaciones")
    {
        Console.WriteLine($"Posicion de palabra implementacion es {posicion}");
        Console.WriteLine($"La palabra {item} teiene {item.Length} caracteres");
        break;
    }
}
