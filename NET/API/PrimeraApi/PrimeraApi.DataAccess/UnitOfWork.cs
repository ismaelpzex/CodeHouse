using PrimeraApi.DataAccess.Contracts;

namespace PrimeraApi.DataAccess
{
	public class UnitOfWork : IUnitOfWork
	{
		private ApplicationDbContext _context;


		public UnitOfWork(ApplicationDbContext context)
        {
			_context = context;
        }

		public void Commit()
        {
			_context.SaveChanges();
        }
	}
}

