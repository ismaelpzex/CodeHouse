
using _24_EjercicioLinqLibros.Clases;
using Microsoft.EntityFrameworkCore;

namespace _24_EjercicioLinqLibros
{
	public class ApplicationDbContext : DbContext
	{
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			string connectionString = "Server=localhost;Port=3306;Database=VentasEF;Uid=root;Pwd=programacion2022";
			optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)).EnableSensitiveDataLogging();
		}

		public DbSet<Book> Books { get; set; }
		public DbSet<Author> Authors { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Book>();
			modelBuilder.Entity<Author>();
		}
	}
}

