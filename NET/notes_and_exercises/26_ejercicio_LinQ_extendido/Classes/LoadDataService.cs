using System;
using _26_ejercicio_LinQ_extendido.Entities;
using _26_ejercicio_LinQ_extendido.Interfaces;

namespace _26_ejercicio_LinQ_extendido.Classes
{
	public class LoadDataService : ILoadDataService
	{
		public LoadDataService()
		{
		}

        public List<Alumn> LoadAlumns()
        {
            return new List<Alumn>
            {
                new Alumn
                {
                    Name = "Ismael",
                    LastName = "de la Poza",
                    Age = 32,
                    Class = ".NET"
                },

                new Alumn
                {
                    Name = "Juán",
                    LastName = "Martinez",
                    Age = 33,
                    Class = ".NET"
                },

                new Alumn
                {
                    Name = "Raul",
                    LastName = "Val Peral",
                    Age = 18,
                    Class = "Javascript"
                },
            };
        }

        public List<Teacher> LoadTeachers()
        {
            return new List<Teacher>
            {
                new Teacher
                {
                    Name = "Pedro",
                    LastName = "Sánchez",
                    Age = 39,
                    Subject = ".NET"
                },

                new Teacher
                {
                    Name = "Iván",
                    LastName = "Luengo",
                    Age = 36,
                    Subject = "Javascript"
                }
            };
        }
    }
}

