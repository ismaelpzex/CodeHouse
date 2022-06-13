List<int> lista1 = new List<int>();
lista1.Add(1);
lista1.Add(2);
lista1.Add(3);

List<int> lista2 = new List<int>();
lista2.Add(4);
lista2.Add(5);
lista2.Add(6);

lista1.AddRange(lista2);

Console.WriteLine("Valores de la primera lista");
print("-------------");

Console.WriteLine($"La lista 1 tiene {lista1.Count} items");
Console.WriteLine($"La lista 2 tiene {lista2.Count} items");

lista1.Remove(1);

print("-------- eliminamos el 1 de la lista 1 --------");

lista1.RemoveAt(2);

print("-------- eliminamos la posicion 2 de la lista 1 --------");

lista1.Add(1);

print("-------- añadimos un 1 a la lista 1 --------");

lista1.Sort();

print("-------- ordenamos de mayor a menor la lista 1 --------");

void print(string texto)
{
    Console.WriteLine(texto);
    foreach (object item in lista1)
    {
        Console.WriteLine(item);
    }
}




