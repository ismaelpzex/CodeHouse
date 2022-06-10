// declaramos variable booleana con -> bool
bool vBool = true;
Console.WriteLine("Mi variable booleana: " + vBool);

//Declarar un entero -> int
int vInt = 1;
Console.WriteLine("mi numero entero es: " + vInt);

//declarar un chart -> chart
char vChar = 'a';
Console.WriteLine("el caracter es: " + vChar);

// declaramos un decimal -> float
float vFloat = 3.54f;
Console.WriteLine("mi decimal es: " + vFloat);

// declaramos un string -> string
string vString = "Hola mundo";
Console.WriteLine("Mi string es: " + vString);

// concatenamos dos cadenas de texto
string vHola = "Hola";
string vMundo = "Mundo";
Console.WriteLine(vHola + ' ' + vMundo);

// declaramos una variable nula
string? NullString = null;
Console.WriteLine(NullString);

// convertir un tipo a un tipo nulable
// -> int vEntero = null; <- da error porque no se puede asignar a un int un nulo.
int? vEnteroN = null; // lo solucionamos con la interrogación
Console.WriteLine(vEnteroN);

// array de tipo booleano
bool[] arrayBool = { true, false, true };
Console.WriteLine(arrayBool[1]);

//definir un array de tipo int con tres valores
int[] arrayInt = { 1, 2, 3 };
Console.WriteLine(arrayInt[1]);

// definir un array de tipo char
char[] arrayChar = { 'a', 'b', 'c' };
Console.WriteLine(arrayChar[2]);

char[] arrayChar3 = new char[3];
arrayChar3[0] = 'a';
arrayChar3[1] = 'b';
arrayChar3[2] = 'c';
Console.WriteLine(arrayChar3[0]);



