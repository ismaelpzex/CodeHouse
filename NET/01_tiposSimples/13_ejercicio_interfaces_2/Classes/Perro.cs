
using _13_ejercicio_interfaces_2.Interfaces;

namespace _13_ejercicio_interfaces_2.Classes
{
	public class Perro : IPerro
	{
        private string Name { get; set; }

        public void SetName(string name)
        {
            Name = name;
        }

        public void GetName()
        {
            Console.WriteLine(Name);
        }

        public void Comer()
        {
            Console.WriteLine("Comiendo");
        }


    }
}

