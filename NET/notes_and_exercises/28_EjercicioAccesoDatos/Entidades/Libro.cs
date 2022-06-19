using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _28_EjercicioAccesoDatos.Entidades
{
    public class Libro
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Titulo { get; set; }

        [ForeignKey("Autor")]
        public int AutorId { get; set; }

        public Autor Autor { get; set; }
    }
}
