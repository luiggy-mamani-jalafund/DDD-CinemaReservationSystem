using AutoMapper;
using CleanCinemaReservation.Core.src.Application.DTOs.TheatersDtos;
using CleanCinemaReservation.Core.src.Application.Interfaces;
using CleanCinemaReservation.Core.src.Domain.Entities.Theaters;
using Microsoft.AspNetCore.Mvc;

namespace CleanCinemaReservation.API.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TheaterController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly ITheaterService _theaterService;

    public TheaterController(ITheaterService theaterService, IMapper mapper)
    {
        _theaterService = theaterService;
        _mapper = mapper;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTheaterById(string id)
    {
        try
        {
            var theater = await _theaterService.GetById(id);
            var theaterResponse = _mapper.Map<TheaterDto>(theater);

            return Ok(theaterResponse);
        }
        catch (Exception exception)
        {
            return StatusCode(500, $"Internal server error: {exception.Message}");
        }
    }

    [HttpPost("occupiedseats")]
    public IActionResult GetOccupiedSeats([FromBody] RequestForOccupiedSeats requestForOccupiedSeats)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var seatingSet = _mapper.Map<List<SeatingSet>>(requestForOccupiedSeats.SeatingSet);

        try
        {
            var occupiedSeats = _theaterService.GetOccupiedSeats(
                    seatingSet,
                    requestForOccupiedSeats.ReservedSeats
                );

            return Ok(occupiedSeats);
        }
        catch (Exception exception)
        {
            return StatusCode(500, $"Internal server error: {exception.Message}");
        }
    }

}
