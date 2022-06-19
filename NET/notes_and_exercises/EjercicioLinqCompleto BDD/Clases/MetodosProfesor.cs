using test.Entidades;
using test.Interfaces;

namespace test.Clases
{
    public class MetodosProfesor : IMetodosProfesor
    {
        private ApplicationDbContext _context;

        public MetodosProfesor()
        {
            _context = new ApplicationDbContext();
        }

        public ProfesorExtendidoPaginado GetProfesores(string? filtroPoblacion = null, int pagina = 1, int elementosPorPagina = 1)
        {
            ProfesorExtendidoPaginado resultado = new ProfesorExtendidoPaginado();

            var query = from p in _context.Profesores

                        join c in _context.Clases on p.Clase equals c.Numero

                        join pb in _context.Poblaciones on p.PoblacionId equals pb.Id

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
