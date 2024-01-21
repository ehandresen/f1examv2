using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Contexts;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions<MyContext> options) : base(options)
    {

    }

    public DbSet<Driver> Drivers { get; set; }

}

