using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EjercicioLinqCompletoBBDD.Entidades;

namespace EjercicioLinqCompletoBBDD.Entidades
{
	public class Nota
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[ForeignKey("Alumno")]
		public int AlumnoId { get; set; }

		public virtual Alumno Alumno { get; set; } // ESTA PROPIEDAD APUNTA A LA TABLA DE ALUMNOS

		[ForeignKey("Clase")]
		public int ClaseId { get; set; }

		public virtual Clase Clase { get; set; } // ESTA PROPIEDAD APUNTA A LA TABLA DE ALUMNOS

		public int Calificacion { get; set; }
	}
}

