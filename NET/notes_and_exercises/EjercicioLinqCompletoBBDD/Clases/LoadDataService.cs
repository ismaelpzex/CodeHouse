using EjercicioLinqCompletoBBDD.Entidades;
using EjercicioLinqCompletoBBDD.Interfaces;

namespace EjercicioLinqCompletoBBDD.Clases
{
    public class LoadDataService : ILoadDataService
    {
        public List<Alumno> GetAlumnos()
        {
            return new List<Alumno>
            {
                new Alumno { Nombre = "Elisa",Notas = new List<int> { 2, 8, 5, 9 },FechaDeNacimiento = new DateTime(2002,1,1),   Clase=3, PoblacionId = 1 },
                new Alumno { Nombre = "Flor", Notas = new List<int> { 6, 2, 6, 5 },FechaDeNacimiento = new DateTime(2003,11,21), Clase=4, PoblacionId = 2 },
                new Alumno { Nombre = "Ricardo", Notas = new List<int> { 10, 8, 6, 3 },FechaDeNacimiento = new DateTime(2002, 12, 8), Clase=3, PoblacionId = 3 },
                new Alumno { Nombre = "Aitor", Notas = new List<int> { 6, 7, 4, 5 },FechaDeNacimiento = new DateTime(2001,2,10), Clase=2, PoblacionId = 1 },
                new Alumno { Nombre = "Antonio", Notas = new List<int> { 6, 7, 4, 5 },FechaDeNacimiento = new DateTime(2001,2,10), Clase=2, PoblacionId = 1 },
                new Alumno { Nombre = "Rebeca", Notas = new List<int> { 2, 8, 5, 9 }, FechaDeNacimiento = new DateTime(2002,1,1), Clase=3, PoblacionId = 3 },
                new Alumno { Nombre = "Flavio", Notas = new List<int> { 8, 9, 5, 8 },FechaDeNacimiento = new DateTime(2001,8,28), Clase=2, PoblacionId = 1 }
            };
        }

        public List<Clase> GetClases()
        {
            return new List<Clase>
            {
                new Clase { Anyo = 2000, Numero=1, Nombre="Ken Thompson"},
                new Clase { Anyo = 2001, Numero=2, Nombre="Maria Zambrano"},
                new Clase { Anyo = 2002, Numero=3, Nombre="Dennis Ritchie"},
                new Clase { Anyo = 2003, Numero=4, Nombre="Ada Lovelace"}
            };
        }

        public List<Poblacion> GetPoblaciones()
        {
            return new List<Poblacion>
             {
             new Poblacion
             {
             Id = 1,
            Nombre = "Madrid"
             },
             new Poblacion
             {
             Id = 2,
             Nombre = "Barcelona"
             },
             new Poblacion
             {
             Id = 3,
            Nombre = "Valencia"
             }
            };
        }

        public List<Profesor> GetProfesores()
        {
            return new List<Profesor>
                 {
                 new Profesor
                 {
                 Nombre = "Juana",
                FechaDeNacimiento = new DateTime(2002,1,1),
                 Clase=3,
                 PoblacionId=1
                 },
                 new Profesor { Nombre = "Flor",FechaDeNacimiento = new
                DateTime(2003,11,21), Clase=4,PoblacionId=2 },
                 new Profesor { Nombre = "Ricardo",FechaDeNacimiento = new
                DateTime(2002, 12, 8), Clase=3,PoblacionId=3 },
                 new Profesor { Nombre = "Aitor",FechaDeNacimiento = new
                DateTime(2001,2,10), Clase=2,PoblacionId=1 },
                 new Profesor { Nombre = "Antonio",FechaDeNacimiento = new
                DateTime(2001,2,10), Clase=2,PoblacionId=2 },
                 new Profesor { Nombre = "Rebeca", FechaDeNacimiento = new
                DateTime(2002,1,1), Clase=3,PoblacionId=3 },
                 new Profesor { Nombre = "Flavio",FechaDeNacimiento = new
                DateTime(2001,8,28), Clase=2,PoblacionId=2 },
                 new Profesor { Nombre = "Ruben",FechaDeNacimiento = new
                DateTime(2006,8,28), Clase=2,PoblacionId=1 }
                 };
        }
    }
}
