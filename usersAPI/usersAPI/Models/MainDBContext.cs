using Microsoft.EntityFrameworkCore;

namespace usersAPI.Models
{
    public class MainDBContext : DbContext
    {

        public MainDBContext(DbContextOptions<MainDBContext> options) : base(options)
        {
            
        }
        
        public DbSet<Candidate> Candidates { get; set; }
    }
}
