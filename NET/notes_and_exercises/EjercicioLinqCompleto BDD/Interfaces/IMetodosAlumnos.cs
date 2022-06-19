using test.Entidades;

namespace test.Interfaces
{
    public interface IMetodosAlumnos
    {
        AlumnoExtendidoPaginado GetAlumnosJoin(DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? notaMedia = 0.0, string? filtroNombre = null, int pagina = 1, int elementosPorPagina = 1);
    }
}
