using test.Entidades;

namespace test.Interfaces
{
    public interface IMetodosProfesor
    {
        ProfesorExtendidoPaginado GetProfesores(string? filtroPoblacion = null, int pagina = 1, int elementosPorPagina = 1);
    }
}
