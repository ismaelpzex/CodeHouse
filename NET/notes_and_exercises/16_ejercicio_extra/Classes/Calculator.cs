
using _16_ejercicio_extra.Interfaces;

namespace _16_ejercicio_extra.Classes
{
	public class Calculator : ICalculator
	{
		private int Num1;
		private int Num2;

		public Calculator(int a, int b)
		{
			Num1 = a;
			Num2 = b;
		}

		public void ResultSum()
		{
			Console.WriteLine($"{Num1} + {Num2} = {Sum()}");
		}

		public void ResultSub()
		{
			Console.WriteLine($"{Num1} - {Num2} = {Sub()}");
		}

		public void ResultMul()
		{
			Console.WriteLine($"{Num1} * {Num2} = {Mul()}");
		}

		public void ResultDiv()
		{
			Console.WriteLine($"{Num1} / {Num2} = {Div()}");
		}

		private int Sum ()
        {
			return Num1 + Num2;
        }

		private int Sub()
		{
			return Num1 - Num2;
		}

		private int Mul()
		{
			return Num1 * Num2;
		}

		private float Div()
		{
			return (float)Num1 / (float)Num2;
		}
	}
}

