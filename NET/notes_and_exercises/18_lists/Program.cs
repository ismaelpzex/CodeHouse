//Lista<tipo> nombre = new List<tipo>()

List<string> myList = new List<string>(); // nueva lista

void list(string accion)
{
    Console.WriteLine(accion);
    foreach (string item in myList)
    {
        Console.WriteLine(item);
    }
}
// añadir valores

myList.Add("Manzana");
myList.Add("Pera");
myList.Add("Platano");

list("-----valores añadidos----");
Console.WriteLine($"La lista tiene {myList.Count} elementos");


// borrar valores

myList.RemoveAt(0);
list("-----Borrar valores por posicion----");

myList.Remove("platano");
list("-----borrar valor por referencia----");

List<string> myList2 = new List<string>(); // nueva lista

myList.Add("Fresa");
myList.Add("Naranja");
myList.Add("Melón");

myList.AddRange(myList2);

list("-----volcar valores de lista 2 a lista 1----");

myList.Sort();

list("-----ordenar lista con sort----");



