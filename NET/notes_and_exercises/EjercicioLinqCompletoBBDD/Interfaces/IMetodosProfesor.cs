using EjercicioLinqCompletoBBDD.Entidades;

namespace EjercicioLinqCompletoBBDD.Interfaces
{
    public interface IMetodosProfesor
    {
        ProfesorExtendidoPaginado GetProfesores(string? filtroPoblacion = null, int pagina = 1, int elementosPorPagina = 1);
    }
}
