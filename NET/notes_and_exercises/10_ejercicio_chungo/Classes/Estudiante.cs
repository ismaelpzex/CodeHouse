using System;
namespace _10_ejercicio_chungo.Classes
{
	public class Estudiante : Persona
	{
        public Estudiante(string name) : base(name)
        {
        }

        public void Estudiar()
        {
			Console.WriteLine($"Soy {Name} estoy estudiando");
        }
	}
}

