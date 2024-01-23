using backend.Contexts;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{

    private readonly MyContext context;

    public DriversController(MyContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        try
        {
            List<Driver> drivers = await context.Drivers.ToListAsync(); // 'Drivers' reffererer til database tabellen

            if (drivers is null || drivers.Count == 0)
                return NotFound("No drivers found in database");

            return Ok(drivers);


        }
        catch
        {
            return StatusCode(500); // Server error
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> GetById(int id)
    {
        try
        {
            Driver? driver = await context.Drivers.FindAsync(id);

            if (driver is null)
                return NotFound($"Driver with id {id} not found");

            return Ok(driver);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<ActionResult<Driver>> GetByName(string name)
    {
        try
        {

            Driver? driver = await context.Drivers.FirstOrDefaultAsync(driver => driver.Name != null && driver.Name.ToLower().Contains(name.ToLower()));

            if (driver is null)
                return NotFound($"Driver with name containing '{name}' not found");

            return Ok(driver);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<ActionResult> Post(Driver newDriver)
    {
        try
        {
            context.Drivers.Add(newDriver);

            await context.SaveChangesAsync();

            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

}