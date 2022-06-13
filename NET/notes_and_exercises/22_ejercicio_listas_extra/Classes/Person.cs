
using _22_ejercicio_listas_extra.Interfaces;

namespace _22_ejercicio_listas_extra.Classes
{
	public class Person : IPerson
	{
		public string Name { get; set; }
		public string LastName { get; set; }
		public int Age { get; set; }

		public Person(string name, string lastName, int age)
		{
			Name = name;
			LastName = lastName;
			Age = age;
		}
    }
}

