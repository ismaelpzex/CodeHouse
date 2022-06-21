using System;
using EjercicioLinqCompletoBBDD.Entidades;
using Microsoft.EntityFrameworkCore;

namespace EjercicioLinqCompletoBBDD
{
    public class ApplicationDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string mySqlConnectionStr = "Server=localhost;Port=3307;Database=Test; Uid=root;Pwd=programacion2022;";

            optionsBuilder.UseMySql(mySqlConnectionStr, ServerVersion.AutoDetect(mySqlConnectionStr)).EnableSensitiveDataLogging();
        }

        public DbSet<Alumno> Alunnos { get; set; }
        public DbSet<Profesor> Profesores { get; set; }
        public DbSet<Clase> Clases { get; set; }
        public DbSet<Poblacion> Poblaciones { get; set; }
        public DbSet<Nota> Notas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Alumno>();

            modelBuilder.Entity<Profesor>();

            modelBuilder.Entity<Clase>();

            modelBuilder.Entity<Poblacion>();

        }
    }
}

