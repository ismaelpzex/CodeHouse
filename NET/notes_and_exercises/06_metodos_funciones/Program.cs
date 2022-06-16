////metodo que haga una suma y la saque por pantalla

void MetodoSumar(int numero1, int numero2)
{
    int suma = numero1 + numero2;
    Console.WriteLine(suma);
}

//MetodoSumar(1, 2);

//// FUNCION

//int FuncionSumar(int numero1, int numero2)
//{
//    return numero1 + numero2;
//}


//int resultado = (FuncionSumar(2, 2));
//Console.WriteLine(resultado);

//// 1
//Console.Clear();
//Console.WriteLine("EJERCICIO 1");
//void MetodoSaludar()
//{
//    Console.WriteLine("Hola");
//}

//void MetodoDespedir()
//{
//    Console.WriteLine("¡Adiós!");
//}

//MetodoSaludar();
//MetodoDespedir();
//Console.WriteLine("Presiona una tecla para continuar");
//Console.ReadKey();

////2
//Console.Clear();
//Console.WriteLine("EJERCICIO 2");
//void MetodoSaludarNombre(string name)
//{
//    Console.WriteLine($"Hola {name}");
//}

//void MetodoDespedirNombre(string name)
//{
//    Console.WriteLine($"Adiós {name}");
//}

//Console.WriteLine("Inserta un nombre");
//string name = Console.ReadLine();
//MetodoSaludarNombre(name);
//Thread.Sleep(2000);
//MetodoDespedirNombre(name);
//Console.WriteLine("Presiona una tecla para continuar");
//Console.ReadKey();

////3
//Console.Clear();
//Console.WriteLine("EJERCICIO 3");
//int FuncionSumarEjercicio(int a, int b)
//{
//    return a + b;
//}

//int numero1;
//int numero2;
//Console.ForegroundColor = ConsoleColor.Green;
//Console.WriteLine("Inserta un Número");
//bool aKey = int.TryParse(Console.ReadLine(), out numero1);
//while (!aKey)
//{
//    Console.Clear();
//    Console.ForegroundColor = ConsoleColor.Red;
//    Console.WriteLine("Introduce un Número (solo se admiten números)");
//    aKey = int.TryParse(Console.ReadLine(), out numero1);
//}
//Console.ForegroundColor = ConsoleColor.Green;
//Console.WriteLine("Inserta el Segundo Número");
//bool bKey = int.TryParse(Console.ReadLine(), out numero2);
//while (!bKey)
//{
//    Console.Clear();
//    Console.ForegroundColor = ConsoleColor.Red;
//    Console.WriteLine("Inserta el Segundo (solo se admiten números)");
//    bKey = int.TryParse(Console.ReadLine(), out numero2);
//}
//Console.ForegroundColor = ConsoleColor.Green;
//Console.WriteLine($"El resultado de la suma es -> {FuncionSumarEjercicio(numero1, numero2)}");
