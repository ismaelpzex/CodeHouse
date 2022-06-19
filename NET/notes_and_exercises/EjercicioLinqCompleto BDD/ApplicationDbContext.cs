using System;
using test.Entidades;
using Microsoft.EntityFrameworkCore;

namespace test
{
	public class ApplicationDbContext : DbContext
	{
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
			string mySqlConnectionStr = "Server=localhost;Port=3306;Database=Clases_Profesores_Alumnos; Uid=root;Pwd=programacion2022;";

			optionsBuilder.UseMySql(mySqlConnectionStr, ServerVersion.AutoDetect(mySqlConnectionStr)).EnableSensitiveDataLogging();
		}

		public DbSet<Alumno> Alumnos { get; set; }
		public DbSet<Clase> Clases { get; set; }
		public DbSet<Poblacion> Poblaciones { get; set; }
		public DbSet<Profesor> Profesores { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Alumno>();
			modelBuilder.Entity<Clase>();
			modelBuilder.Entity<Poblacion>();
			modelBuilder.Entity<Profesor>();
		}
	}

}

