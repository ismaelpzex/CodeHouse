
// Ejercicio 1

//int vYearNow = int.Parse(DateTime.Now.ToString("yyyy")); //DateTime.Now.Year() <-
//Console.WriteLine("----- Obtención de datos ------");
//Console.WriteLine("Introduce tu nombre y apellidos");
//string vName = Console.ReadLine();
//Console.WriteLine("introduce tu edad");
//int vYears = int.Parse(Console.ReadLine());
//Console.WriteLine("Introduce el nombre de tu calle");
//string vAddress = Console.ReadLine();
//Console.WriteLine("introduce el número");
//int vNumber = int.Parse(Console.ReadLine());
//Console.WriteLine("Introduce la ciudad");
//string vCity = Console.ReadLine();
//Console.WriteLine("Introduce tu código postal");
//int vPostalCode = int.Parse(Console.ReadLine());
//Console.WriteLine("Email");
//string vEmail = Console.ReadLine();
//Console.WriteLine("Número de teléfono");
//string vPhone = Console.ReadLine();
//Console.Clear();
//Console.WriteLine("----- Presentación de datos ------");
//Console.WriteLine($"Nombre -> { vName }");
//Console.WriteLine($"Año nacimiento -> { vYearNow - vYears }");
//Console.WriteLine("Datos de contacto");
//Console.WriteLine($"Calle { vAddress }, Numero { vNumber }, {vPostalCode}, { vCity }");
//Console.WriteLine($"Teléfono: { vPhone }");
//Console.WriteLine($"Email: {vEmail}");
//Console.WriteLine("----- Presione cualquier tecla para continuar ------");
//Console.ReadKey();






// OTRO EJERCICIO, HACER UNA PEQUEÑA CALCULADORA, debe pedir como entrada dos numeros y dar el resultado por pantalla

//Console.Clear();
//Console.WriteLine("introduce el primer numero");
//int n1;
//if (!int.TryParse(Console.ReadLine(), out n1))
//{
//    Console.WriteLine("ERROR el primer numero");
//    int.TryParse(Console.ReadLine(), out n1);
//}
//Console.WriteLine("introduce el segundo numero");
//int n2;
//int.TryParse(Console.ReadLine(), out n2);
//int resultSum = n1 + n2;
//int resultSub = n1 - n2;
//int resultMul = n1 * n2;
//float resultDiv = (float)n1 / (float)n2;
//Console.WriteLine($"{ n1 } + { n2 } = {resultSum}");
//Console.WriteLine($"{ n1 } - { n2 } = {resultSub}");
//Console.WriteLine($"{ n1 } * { n2 } = {resultMul}");
//Console.WriteLine($"{ n1 } / { n2 } = {resultDiv}");
//Console.WriteLine("----- Presione cualquier tecla para continuar ------");
//Console.ReadKey();

//Console.Clear();
//Console.WriteLine("calculadora 2");
//Console.WriteLine("introduce el primer numero");
//int valor1 = int.Parse(Console.ReadLine());
//Console.WriteLine("introduce el segundo numero");
//int valor2 = int.Parse(Console.ReadLine());
//Console.WriteLine("Introduce '+' para sumar, '-' para restar, '*' para multiplicar o '/' para dividir");
//string operador = Console.ReadLine();
//bool key = false;
//do
//{

//    if (operador == "+")
//    {
//        Console.WriteLine($"{valor1} + {valor2} = {valor1 + valor2}");
//        key = true;

//    }
//    else if (operador == "-")
//    {
//        Console.WriteLine($"{valor1} - {valor2} = {valor1 - valor2}");
//        key = true;
//    }
//    else if (operador == "*")
//    {
//        Console.WriteLine($"{valor1} * {valor2} = {valor1 * valor2}");
//        key = true;
//    }
//    else if (operador == "/")
//    {
//        Console.WriteLine($"{valor1} / {valor2} = {valor1 / valor2}");
//        key = true;

//    }
//    else
//    {
//        Console.WriteLine("ERROR -> Introduce '+' para sumar, '-' para restar, '*' para multiplicar o '/' para dividir");
//        operador = Console.ReadLine();
//    }


//} while (!key);

