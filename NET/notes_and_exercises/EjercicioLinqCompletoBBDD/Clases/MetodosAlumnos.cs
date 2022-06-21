using EjercicioLinqCompletoBBDD.Entidades;
using EjercicioLinqCompletoBBDD.Interfaces;

namespace EjercicioLinqCompletoBBDD.Clases
{
    public class MetodosAlumnos : IMetodosAlumnos
    {
        private ApplicationDbContext _context { get; set; }

        public MetodosAlumnos()
        {
            _context = new ApplicationDbContext();

        }

        public AlumnoExtendidoPaginado GetAlumnosJoin(DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? notaMedia = 0.0, string? filtroNombre = null, int pagina = 1, int elementosPorPagina = 1)
        {
            AlumnoExtendidoPaginado resultado = new AlumnoExtendidoPaginado();

            var query = from n in _context.Notas
                        group n by new { n.AlumnoId, n.ClaseId} into agrupacion
                        select agrupacion;



            var query2 = from q in query
                         join a in _context.Alunnos on q.Key.AlumnoId equals a.Id
                         join c in _context.Clases on q.Key.ClaseId equals c.Id
                         join p in _context.Poblaciones on a.PoblacionId equals p.Id
                         let notaMediaBD = q.Select(c => c.Calificacion).Average()
                         where (string.IsNullOrEmpty(filtroNombre) || a.Nombre.StartsWith(filtroNombre))
                         && (notaMedia == null || notaMediaBD >= notaMedia)
                         && (fechaDesde == null || a.FechaDeNacimiento >= fechaDesde)
                         && (fechaHasta == null || a.FechaDeNacimiento <= fechaHasta)
                         select new AlumnoExtendido
                         {
                             NombreAlumno = a.Nombre,
                             FechaDeNacimientoAlumno = a.FechaDeNacimiento,
                             NombreClase = c.Nombre,
                             NotaMediaAlumno = notaMediaBD,
                             NombrePoblacion = p.Nombre
                         };

            resultado.Total = query2.Count();
            int skip = (pagina - 1) * elementosPorPagina;
            resultado.Pagina = pagina;
            resultado.ElementosPorPagina = elementosPorPagina;

            resultado.Resultados = query2.Skip(skip).Take(elementosPorPagina).ToList();

            //var query = from a in ListaAlumnos

            //            let notaMediaLinq = a.Notas.Average()

            //            join c in ListaClases on a.Clase equals c.Numero

            //            join p in ListaPoblaciones on a.PoblacionId equals p.Id

            //            where

            //                 (string.IsNullOrEmpty(filtroNombre) || a.Nombre.StartsWith(filtroNombre))

            //                  &&(notaMedia == null || notaMediaLinq >= notaMedia)

            //                  &&(fechaDesde == null || a.FechaDeNacimiento >= fechaDesde)

            //                  &&(fechaHasta == null || a.FechaDeNacimiento <= fechaHasta)


            //            //where (false or aplica el filtro)
            //            //  and (true or false)
            //            //  and (true or false)
            //            //  and (true or false)
            //            //where (true)
            //            //  and (true)
            //            //  and (true)
            //            //  and (true)

            //            select new AlumnoExtendido
            //            {
            //                NombreAlumno = a.Nombre,
            //                FechaDeNacimientoAlumno = a.FechaDeNacimiento,
            //                NombreClase = c.Nombre,
            //                NotaMediaAlumno = notaMediaLinq,
            //                NombrePoblacion = p.Nombre
            //            };


            return resultado;
        }
    }
}
