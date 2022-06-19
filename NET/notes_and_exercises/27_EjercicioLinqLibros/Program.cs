using _24_EjercicioLinqLibros.Clases;
using _24_EjercicioLinqLibros.Entidades;
using _24_EjercicioLinqLibros.Interfaces;


// Ejercicio 1 (Sacar los 3 libros con más ventas)
Console.WriteLine("Ejercicio 1 (Sacar los 3 libros con más ventas)");
IDataService dataService = new DataService();
List<Book> listBookTop3MaxSales = dataService.GetTop3BooksMaxSales();
ImprimirVentas(listBookTop3MaxSales);


// Ejercicio 2 (Mostrar en consola los 3 libros con menos ventas)
Console.WriteLine("\nEjercicio 2 (Mostrar en consola los 3 libros con menos ventas)");
List<Book> ListBookTop3MinSales = dataService.GetTop3MinSales();
ImprimirVentas(ListBookTop3MinSales);


// Ejercicio 3 (Mostrar en consola el autor con más libros publicados.)
//Console.WriteLine("\nEjercicio 3 (Mostrar en consola el autor con más libros publicados.)");
//AuthorResponse AuthorBestPublished = dataService.getAuthorBestPublised();
//Console.WriteLine($"{AuthorBestPublished.AuthorName} es el autor com más libros publicados con un total de {AuthorBestPublished.BookPublished} libros");

// Ejercicio 4 (Mostrar en consola el autor y la cantidad de libros publicados.)
//Console.WriteLine("\nEjercicio 4 (Mostrar en consola el autor y la cantidad de libros publicados.)");
//List<AuthorResponse> AuthorsAndBooks = dataService.GethAuthorsAndBooksPublished();

//foreach (AuthorResponse authorAndBook in AuthorsAndBooks)
//{
//    Console.WriteLine($"{authorAndBook.AuthorName} ha publicado {authorAndBook.BookPublished} libros");


//}
// Ejercicio 5 (Mostrar en consola los libros publicados hace menos de 50 años.)
Console.WriteLine("\nEjercicio 5 (Mostrar en consola los libros publicados hace menos de 50 años.)");
List<Book> listBooks50Years = dataService.GetBooks50Year();
foreach (Book book in listBooks50Years)
{
    Console.WriteLine($"{book.Title} publicado en {book.PublicationDate}");
}


// Ejercicio 6 (Mostrar en consola el libro más viejo.)
Console.WriteLine("\nEjercicio 6 (Mostrar en consola el libro más viejo.)");
Book oldBook = dataService.GetOldBook();
Console.WriteLine($"{oldBook.Title} es el libro más antiguo se publicó en {oldBook.PublicationDate}");


// Ejercicio 7 (Mostrar los autores que tengan un libro que comience con 'El'.)
Console.WriteLine("\nEjercicio 7 (Mostrar los autores que tengan un libro que comience con 'El'.)");
List<Author> booksStartWith = dataService.GetAuthors("El");
foreach (Author author in booksStartWith)
{
    Console.WriteLine($"{author.Name} tiene libros publicados que comienza con la palabra 'El'");
}

// Ejercicio 8 (uso de join)
Console.WriteLine("\nEjercicio 8 Uso de join");
List<BookResponse> joinBooks = dataService.GetBooksJoinAuthor();

foreach (BookResponse join in joinBooks)
{
    Console.WriteLine($"El libro {join.BookTitle} ha sido escrito por {join.AuthorName}");
}

// Ejercicio 9 (uso de lef join)
Console.WriteLine("\nEjercicio 9 Uso de left join");
List<BookResponse> ljoinBooks = dataService.GetBooksLeftJoinAuthor();

foreach (BookResponse join in ljoinBooks)
{
    Console.WriteLine($"El libro {join.BookTitle} ha sido escrito por {join.AuthorName}");
}

// Ejercicio 10 (Paginación)
Console.WriteLine("\nEjercicio 10 Paginación");
BookResponsePaginated booksPaginated = dataService.GetBooksLeftJoinAuthorPaginated(1, 5);
Console.WriteLine($"Estamos en la página {booksPaginated.Page}, se están mostrando {booksPaginated.ItemsPage} de {booksPaginated.Total} elementos");
foreach (BookResponse book in booksPaginated.Books)
{
    Console.WriteLine($"{book.BookTitle} ha sido escrito por {book.AuthorName}");
}



void ImprimirVentas (List<Book> listBook)
{
    foreach (Book book in listBook)
    {
        Console.WriteLine($"El libro {book.Title} tiene {book.Sales} ventas");
    }
}
