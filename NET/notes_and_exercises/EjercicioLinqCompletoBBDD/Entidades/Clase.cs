using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EjercicioLinqCompletoBBDD.Entidades
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
        public int Anyo { get; set; }

        public virtual List<Nota> Notas { get; set; } // Emtity framework resuelve la FK de la lista NOTAS hacia CLASE

        public virtual List<Profesor> Profesores { get; set; }  // Emtity framework resuelve la FK de la lista PROFESORES hacia CLASE
    }
}
