using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _24_EjercicioLinqLibros.Clases
{
    public class Author
    {
        [Key]
        public int AuthorId { get; set; }

        [MaxLength(200)]
        [Required]
        public string Name { get; set; }


        public Author(int authorId, string name)
        {
            AuthorId = authorId;
            Name = name;
        }
    }
}
