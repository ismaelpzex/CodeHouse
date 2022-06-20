using EjercicioLinqCompletoBBDD.Entidades;
using EjercicioLinqCompletoBBDD.Interfaces;

namespace EjercicioLinqCompletoBBDD.Clases
{
    public class MetodosProfesor : IMetodosProfesor
    {
        private List<Profesor> ListaProfesores { get; set; }
        private List<Clase> ListaClases { get; set; }
        private List<Poblacion> ListaPoblaciones { get; set; }

        public MetodosProfesor()
        {
            ILoadDataService dataService = new LoadDataService();

            ListaProfesores = dataService.GetProfesores();
            ListaClases = dataService.GetClases();
            ListaPoblaciones = dataService.GetPoblaciones();
        }

        public ProfesorExtendidoPaginado GetProfesores(string? filtroPoblacion = null, int pagina = 1, int elementosPorPagina = 1)
        {
            ProfesorExtendidoPaginado resultado = new ProfesorExtendidoPaginado();

            var query = from p in ListaProfesores

                        join c in ListaClases on p.Clase equals c.Numero

                        join pb in ListaPoblaciones on p.PoblacionId equals pb.Id

                        where (string.IsNullOrEmpty(filtroPoblacion) || pb.Nombre == filtroPoblacion)

                        orderby p.Nombre

                        select new ProfesorExtendido
                        {
                            NombreProfesor = p.Nombre,
                            FechaDeNacimientoProfesor = p.FechaDeNacimiento,
                            NombreClase = c.Nombre,
                            NombrePoblacion = pb.Nombre
                        };

            resultado.Total = query.Count();
            resultado.Pagina = pagina;
            resultado.ElementosPorPagina = elementosPorPagina;

            int skip = (pagina - 1) * elementosPorPagina;

            resultado.Resultados = query.Skip(skip).Take(elementosPorPagina).ToList();

            return resultado;
        }
    }
}
