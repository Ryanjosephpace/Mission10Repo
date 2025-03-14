using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission10Assignment.Data;
using Mission10Assignment.Models;

[Route("api/bowlers")]
[ApiController]
public class BowlersController : ControllerBase
{
    private readonly BowlerDbContext _context;

    public BowlersController(BowlerDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<object>>> GetBowlers()
    {
        var bowlers = await (from b in _context.Bowlers
                             join t in _context.Teams on b.TeamID equals t.TeamID
                             where t.TeamName == "Marlins" || t.TeamName == "Sharks"
                             select new
                             {
                                 BowlerID = b.BowlerID,
                                 FirstName = b.BowlerFirstName ?? "Unknown",
                                 MiddleInit = b.BowlerMiddleInit ?? "",  // ✅ Handle NULL by setting empty string
                                 LastName = b.BowlerLastName ?? "Unknown",
                                 TeamName = t.TeamName,
                                 Address = b.BowlerAddress ?? "No Address",
                                 City = b.BowlerCity ?? "No City",
                                 State = b.BowlerState ?? "No State",
                                 Zip = b.BowlerZip ?? "00000",
                                 PhoneNumber = b.BowlerPhoneNumber ?? "No Phone"
                             }).ToListAsync();

        return Ok(bowlers);
    }


}

