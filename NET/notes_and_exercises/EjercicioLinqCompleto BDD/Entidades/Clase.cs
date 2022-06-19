using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace test.Entidades
{
    public class Clase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Nombre { get; set; }

        [Required]
        public int Numero { get; set; }

        [Required]
        public int Anyo { get; set; }

        public virtual Alumno Alumnos { get; set; }
    }
}
