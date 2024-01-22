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
}