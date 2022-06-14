using System;
using _24_ejemplo_LinQ.Interfaces;

namespace _24_ejemplo_LinQ.Classes
{
    public class ServicioCargaDatos : IServiciosCargaDatos
    {
        public List<ClaseAnimal> CargarClasesAnimales()
        {
            List<ClaseAnimal> result = new List<ClaseAnimal>();
            result.AddRange(new List<ClaseAnimal>
            {
                new ClaseAnimal
                {
                    Id = 1,
                    Descripcion = "Mamífero",
                },
                new ClaseAnimal
                {
                    Id = 2,
                    Descripcion = "Ovíparo",
                }
            });
            return result;
        }

        public List<Gato> CargarGatos()
        {
            List<Gato> result = new List<Gato>();
            result.AddRange(new List<Gato>
            {
                new Gato
                {
                    TipoAnimal = 1,
                    Color = "Blanco",
                    Edad = 3,
                },
                new Gato
                {
                    TipoAnimal = 1,
                    Color = "Negro",
                    Edad = 2,
                },
                new Gato
                {
                    TipoAnimal = 1,
                    Color = "Marrón",
                    Edad = 2,
                }
            });
            return result;
        }
    }
}

