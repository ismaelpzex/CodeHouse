using _26_ejercicio_LinQ_extendido.Entities;

namespace _26_ejercicio_LinQ_extendido.Interfaces
{
	public interface IDataService
	{
		public List<ExtendAlumn> ListAlumnsFilteredWhitNote();
		public List<ExtendTeacher> ListTeachersFilteredWhithEvaluation();
	}
}

