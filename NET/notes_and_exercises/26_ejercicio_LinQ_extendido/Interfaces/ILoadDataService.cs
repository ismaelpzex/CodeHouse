using System;
using _26_ejercicio_LinQ_extendido.Entities;

namespace _26_ejercicio_LinQ_extendido.Interfaces
{
	public interface ILoadDataService
	{
		public List<Alumn> LoadAlumns();
		public List<Teacher> LoadTeachers();
	}
}

