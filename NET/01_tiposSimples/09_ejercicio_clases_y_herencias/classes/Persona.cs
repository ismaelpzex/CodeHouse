
namespace _09_ejercicio_chungo.classes
{
	public class Persona
	{
		public string Name { get; set; }
		public int Edad { get; set; }

		public void Saludar()
        {
			Console.WriteLine($"Hola soy {Name}");
        }

		public void SetEdad(int newEdad)
        {
			Edad = newEdad;
        }
	}
}

