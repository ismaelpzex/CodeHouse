using System;
using _26_ejercicio_LinQ_extendido.Entities;
using _26_ejercicio_LinQ_extendido.Interfaces;

namespace _26_ejercicio_LinQ_extendido.Classes
{
	public class DataService : IDataService
	{
		private List<Alumn> AlumnsList { get; set; }
		private List<Teacher> TeachersList { get; set; }

		public DataService()
		{
			ILoadDataService LoadService = new LoadDataService();

			AlumnsList = LoadService.LoadAlumns();
			TeachersList = LoadService.LoadTeachers();
		}

		public List<ExtendAlumn> ListAlumnsFilteredWhitNote()
        {
			var query = from a in AlumnsList
						where a.Age >= 20 && a.Class == ".NET"
						select new ExtendAlumn
						{
							Name = a.Name,
							LastName = a.LastName,
							Age = a.Age,
							Class = a.Class,
							Grade = 9
						};

			return query.ToList();
        }

		public List<ExtendTeacher> ListTeachersFilteredWhithEvaluation()
		{
			var query = from t in TeachersList
						where t.Subject == ".NET" && t.Age >= 38
						select new ExtendTeacher
						{
							Name = t.Name,
							LastName = t.LastName,
							Age = t.Age,
							Subject = t.Subject,
							Evaluation = 9,


						};
			return query.ToList();
		}
	}
}

