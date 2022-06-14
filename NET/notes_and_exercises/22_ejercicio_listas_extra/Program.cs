using _22_ejercicio_listas_extra.Classes;
using _22_ejercicio_listas_extra.Interfaces;

// Creamos 2 personas
IPerson ikerJimenez = new Person("Iker", "Jimenez", 49);
IPerson jjBenitez = new Person("Juán José", "Benitez", 75);
List<IPerson> Autores = new List<IPerson>() { ikerJimenez, jjBenitez };

// Creamos 5 libros de iker
IBook nocheDelMiedo = new Book("La noche del miedo", 2004, ikerJimenez);
IBook enigmasSinResolver = new Book("Enigmas sin resolver", 1999, ikerJimenez);
IBook enigmasSinResolver2 = new Book("Enigmas sin resolver 2", 2001, ikerJimenez);
IBook campoSanto = new Book("Camposanto", 2005, ikerJimenez);
IBook milenio3 = new Book("Milenio 3", 2006, ikerJimenez);

// Creamos 5 libros de JJ
IBook caballoDeTroya = new Book("Caballo de Troya", 1984, jjBenitez);
IBook elDiarioDeElisio = new Book("El diario de Eliseo", 2019, jjBenitez);
IBook misPrimos = new Book("Mis primos 'El suceso mas importante de la historia'", 2021, jjBenitez);
IBook elDiaDelRelampago = new Book("El día del relámpago", 2013, jjBenitez);
IBook gog = new Book("Gog: Empieza la cuenta atrás", 2018, jjBenitez);

// Creamos la lista con todos los libros
List<IBook> listaLibros = new List<IBook>()
{
    nocheDelMiedo,
    enigmasSinResolver,
    enigmasSinResolver2,
    campoSanto,
    milenio3,
    caballoDeTroya,
    elDiarioDeElisio,
    misPrimos,
    elDiaDelRelampago,
    gog,
};

// Creamos las listas de libros para las editoriales
List<IBook> planeta = new List<IBook>()
{
    caballoDeTroya,
    elDiarioDeElisio,
    misPrimos,
    elDiaDelRelampago,
};


List<IBook> altaya = new List<IBook>()
{
    nocheDelMiedo,
    enigmasSinResolver,
    enigmasSinResolver2,
    campoSanto,
};


List<IBook> edaf = new List<IBook>()
{
    milenio3,
    gog,
};


// Creamos 3 editoriales

IEditorial editorialPlaneta = new Editorial("Planeta", planeta);
IEditorial editorialAltaya = new Editorial("Altaya", altaya);
IEditorial editorialEdaf = new Editorial("Edaf", edaf);

List<IEditorial> editoriales = new List<IEditorial>()
{
    editorialPlaneta,
    editorialAltaya,
    editorialEdaf,
};

// Añadir un libro con una persona nueva
IPerson stephen = new Person("Stephen", "King", 74);
Autores.Add(stephen);

IBook it = new Book("It", 1986, stephen);
IBook resplandor = new Book("El Resplandor", 1977, stephen);
listaLibros.Add(it);
listaLibros.Add(resplandor);

//Añado la lista de libros que va relacionada a la editorial
//List<IBook> test = new List<IBook>() { it, resplandor };
List<IBook> test = new List<IBook>();

foreach (IBook book in listaLibros)
{
    if (book.Author.Name == "Stephen")
    {
        test.Add(book);
    }
}

// Añadimos una editorial
IEditorial testeo = new Editorial("Editorial Inglesa", test);

// Añadimos la nueva editorial a la lista de editoriales

editoriales.Add(testeo);
void getAllBooks()
{
    foreach (IEditorial editorial in editoriales)
    {
        editorial.getBooks();
    }
}

getAllBooks();

Console.WriteLine("\n----Borrado de Persona---\n");


void deleteBooksOfAutor(string name)
{
    List<IBook> deleteBooks = new List<IBook>();
    foreach (IBook book in listaLibros)
    {
        
        if (book.Author.Name == name) {
            deleteBooks.Add(book);
        }
    }

    foreach (IBook dbook in deleteBooks)
    {
        if (listaLibros.Contains(dbook) )
        {
            listaLibros.Remove(dbook);
        }
    }
    //foreach (IPerson person in Autores)
    //{
    //    if (person.Name == name)
    //    {
    //        Autores.Remove(person);
    //    }
    //}
}

deleteBooksOfAutor("Stephen");
test.RemoveRange(0, test.Count());
Console.WriteLine(test.Count());

getAllBooks();
showEditorial();

List<IEditorial> deleteEditorial = new List<IEditorial>();

foreach (IEditorial editorial in editoriales)
{
   
    if (editorial.Books.Count() == 0 )
    {
        deleteEditorial.Add(editorial);
    }
}

removeEmptyEditorial();
Console.WriteLine("\nEditorial Borrada\n");

showEditorial();

void removeEmptyEditorial()
{
    foreach (IEditorial editorial in deleteEditorial)
    {
        if (editoriales.Contains(editorial))
        {
            editoriales.Remove(editorial);
        }
    }
}
void showEditorial()
{
    foreach (IEditorial editorial in editoriales)
    {
        Console.WriteLine(editorial.Name);
    }
}


// Hacer una query que filtre por nombre de autor que comienze con la letra "i"

var autoresI = from a in Autores
               where a.Name.StartsWith("I")
               select a;

List<IPerson> autorconi = autoresI.ToList();

foreach (IPerson person in autorconi)
{
    Console.WriteLine(person.Name + " " + person.LastName);


}

var querylibros = (from b in listaLibros
                  group b by b.PublicationDate into agrupacion
                  select agrupacion).ToList();


foreach (var item in querylibros)
{
    Console.WriteLine(item.Key);

    foreach (IBook agrupacion in item)
    {
        Console.WriteLine(agrupacion.Name);
    }
}
                 
