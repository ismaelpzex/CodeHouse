using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EjercicioLinqCompletoBBDD.Entidades
{
    public class Poblacion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Nombre { get; set; }

        public virtual List<Alumno> Alumnos { get; set; }  // Emtity framework resuelve la FK de la lista ALUMNOS hacia POBLACION

        public virtual List<Profesor> Profesores { get; set; } // Emtity framework resuelve la FK de la lista PROFESORES hacia POBLACION

    }
}
