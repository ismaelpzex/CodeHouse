// tabla de multiplicar

//int n;
//Console.WriteLine("Introduce un Número");
//bool key = int.TryParse(Console.ReadLine(), out n);
//while(!key)
//{
//    Console.WriteLine("ERROR Introduce un Número");
//    key = int.TryParse(Console.ReadLine(), out n);
//}
//Console.Clear();
//Console.WriteLine($"Tabla del {n}");
//for (int i = 1; i <= 10; i++)
//{
//    Console.WriteLine($"{n} * {i} = {n * i}");
//}

//

// pintar a través de peticion por pantalla

//string vLetra;
//Console.WriteLine("Introduce una Letra");
//vLetra = Console.ReadLine();
//int f;
//Console.WriteLine("Introduce un numero de filas");
//bool key = int.TryParse(Console.ReadLine(), out f);
//while (!key)
//{
//    Console.WriteLine("Introduce un numero de filas EN NUMERO");
//    key = int.TryParse(Console.ReadLine(), out f);
//}
//int c;
//Console.WriteLine("Introduce un numero de columnas");
//bool vkey = int.TryParse(Console.ReadLine(), out c);
//while (!vkey)
//{
//    Console.WriteLine("Introduce un numero de columnas EN NUMERO");
//    vkey = int.TryParse(Console.ReadLine(), out c);
//}
//Console.Clear();
//for (int i = 1; i <= f; i++)
//{
//    for (int j = 1; j <= c; j++)
//    {
//        Console.Write(vLetra);

//    }
//    Console.WriteLine();
//}



//try
//{
//    int a;
//    int b;
//    Console.ForegroundColor = ConsoleColor.Green;
//    Console.WriteLine("Introduce el dividendo");
//    bool aKey = int.TryParse(Console.ReadLine(), out a);
//    while (!aKey)
//    {
//        Console.WriteLine("Introduce el dividendo (solo se admiten números)");
//        aKey = int.TryParse(Console.ReadLine(), out a);
//    }
//    Console.WriteLine("Introduce el divisor");
//    bool bKey = int.TryParse(Console.ReadLine(), out b);
//    while (!bKey)
//    {
//    Console.WriteLine("Introduce el divisor (solo se admiten números)");
//    bKey = int.TryParse(Console.ReadLine(), out b);
//    }
//    Console.WriteLine($"{a} / {b} = {a / b}");

//}
//catch(DivideByZeroException err)
//{
//    Console.ForegroundColor = ConsoleColor.Red;
//    Console.WriteLine($"{err.Message} -> No se puede dividir entre 0");
//}

