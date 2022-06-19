using _28_EjercicioAccesoDatos.Entidades;
using Microsoft.EntityFrameworkCore;

namespace _28_EjercicioAccesoDatos
{
    public class ApplicationDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string mySqlConnectionStr = "Server=localhost;Port=3306;Database=EjercicioEFPasoAPaso; Uid=root;Pwd=programacion2022;";

            optionsBuilder.UseMySql(mySqlConnectionStr, ServerVersion.AutoDetect(mySqlConnectionStr)).EnableSensitiveDataLogging();
        }

        public DbSet<Libro> Libros { get; set; }
        public DbSet<Autor> Autores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Autor>();

            modelBuilder.Entity<Libro>();


        }
    }
}
