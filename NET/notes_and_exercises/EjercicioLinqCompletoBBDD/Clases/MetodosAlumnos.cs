using EjercicioLinqCompletoBBDD.Entidades;
using EjercicioLinqCompletoBBDD.Interfaces;

namespace EjercicioLinqCompletoBBDD.Clases
{
    public class MetodosAlumnos : IMetodosAlumnos
    {
        private List<Alumno> ListaAlumnos { get; set; }
        private List<Clase> ListaClases { get; set; }
        private List<Poblacion> ListaPoblaciones { get; set; }

        public MetodosAlumnos()
        {
            ILoadDataService dataService = new LoadDataService();

            ListaAlumnos = dataService.GetAlumnos();
            ListaClases = dataService.GetClases();
            ListaPoblaciones = dataService.GetPoblaciones();
        }

        public AlumnoExtendidoPaginado GetAlumnosJoin(DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? notaMedia = 0.0, string? filtroNombre = null, int pagina = 1, int elementosPorPagina = 1)
        {
            AlumnoExtendidoPaginado resultado = new AlumnoExtendidoPaginado();

            var query = from a in ListaAlumnos

                        let notaMediaLinq = a.Notas.Average()

                        join c in ListaClases on a.Clase equals c.Numero

                        join p in ListaPoblaciones on a.PoblacionId equals p.Id

                        where
                        
                             (string.IsNullOrEmpty(filtroNombre) || a.Nombre.StartsWith(filtroNombre))

                              &&(notaMedia == null || notaMediaLinq >= notaMedia)

                              &&(fechaDesde == null || a.FechaDeNacimiento >= fechaDesde)

                              &&(fechaHasta == null || a.FechaDeNacimiento <= fechaHasta)


                        //where (false or aplica el filtro)
                        //  and (true or false)
                        //  and (true or false)
                        //  and (true or false)
                        //where (true)
                        //  and (true)
                        //  and (true)
                        //  and (true)

                        select new AlumnoExtendido
                        {
                            NombreAlumno = a.Nombre,
                            FechaDeNacimientoAlumno = a.FechaDeNacimiento,
                            NombreClase = c.Nombre,
                            NotaMediaAlumno = notaMediaLinq,
                            NombrePoblacion = p.Nombre
                        };

            resultado.Total = query.Count();
            int skip = (pagina - 1) * elementosPorPagina;
            resultado.Pagina = pagina;
            resultado.ElementosPorPagina = elementosPorPagina;

            resultado.Resultados = query.Skip(skip).Take(elementosPorPagina).ToList();

            return resultado;
        }
    }
}
