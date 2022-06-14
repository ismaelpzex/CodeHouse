
using _24_ejemplo_LinQ.Classes;
using _24_ejemplo_LinQ.Interfaces;

IServiciosCargaDatos servicio = new ServicioCargaDatos();

List<ClaseAnimal> listaClaseAnimal = servicio.CargarClasesAnimales();
List<Gato> listaGatos = servicio.CargarGatos();

//Sacar un listado con todos los gatos

Console.WriteLine("Sacar un listado con todos los gatos");

var todosLosGatos = from g in listaGatos
                    select new ResultadoGato
                    {
                        Color = g.Color,
                        Edad = g.Edad,
                    };

List<ResultadoGato> resultadoGatos = todosLosGatos.ToList();

imprimirGatos(resultadoGatos);

//Sacar un listado con los gatos que tienen dos años
Console.WriteLine("\nSacar un listado con los gatos que tienen dos años");

var gatosDosAños = from g in listaGatos
                   where g.Edad == 2
                   select new ResultadoGato
                   {
                       Color = g.Color,
                       Edad = g.Edad,
                   };

List<ResultadoGato> resultadoGatosDosAños = gatosDosAños.ToList();

imprimirGatos(resultadoGatosDosAños);


// Sacar el Gato más viejo
Console.WriteLine("\nSacar el Gato más viejo");
var gatoViejo = from g in listaGatos
                orderby g.Edad descending
                select new ResultadoGato
                {
                    Color = g.Color,
                    Edad = g.Edad
                }
                ;
ResultadoGato resultadoGatoViejo = gatoViejo.First();


imprimirGatos(new List<ResultadoGato> { resultadoGatoViejo });

// Agrupación por gatos de 2 años
Console.WriteLine("\nAgrupación por gatos de 2 años");

var gatosConDosAños = from g in listaGatos
                      group g by g.Edad into gatosMedianos
                      where gatosMedianos.Key == 2
                      select gatosMedianos;

List<ResultadoGato> resultadoGatosConDosAños = new List<ResultadoGato>();

foreach (var gatos in gatosConDosAños)
{
    foreach (var item in gatos)
    {
        resultadoGatosConDosAños.Add(new ResultadoGato
        {
            Color = item.Color,
            Edad = item.Edad,
        });
    };
}


imprimirGatos(resultadoGatosConDosAños);

var queryJoin = from g in listaGatos
                join c in listaClaseAnimal on g.TipoAnimal equals c.Id
                select new ResultadoGato
                {
                    Color = g.Color,
                    Edad = g.Edad,
                    TipoAnimal = c.Descripcion
                };


List<ResultadoGato> resultadoGatosJoin = queryJoin.ToList();
imprimirGatos(resultadoGatosJoin);
// USO DEL JOIN


void imprimirGatos(List<ResultadoGato> lista)
{
    foreach (ResultadoGato item in lista)
    {
        Console.WriteLine($"El gato de color {item.Color} tiene {item.Edad} años y es de tipo {item.TipoAnimal}");
    }
}