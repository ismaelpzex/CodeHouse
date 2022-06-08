using System;
namespace _10_ejercicio_chungo.Classes
{
	public class Profesor : Persona
	{
        public Profesor(string name) : base(name)
        {
        }

        public void Explicar()
        {
			Console.WriteLine($"soy {Name} y estoy explicnado");
        }
	}
}

