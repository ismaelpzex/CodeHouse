
using _16_ejercicio_extra.Classes;

Console.WriteLine("Bienvenido a la calculadora");

Console.Write("Inserta el primer Número\n");

int Num1;
int.TryParse(Console.ReadLine(), out Num1);

Console.Write("Inserta el Segundo Número\n");

int Num2;
int.TryParse(Console.ReadLine(), out Num2);


Calculator Calculator = new Calculator(Num1, Num2);

Calculator.ResultSum();
Calculator.ResultSub();
Calculator.ResultMul();
Calculator.ResultDiv();




