using CleanCinemaReservation.Core.src.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CleanCinemaReservation.API.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ShowtimeController : ControllerBase
{
    private readonly IShowtimeRepository _showtimeRepository;

    public ShowtimeController(IShowtimeRepository showtimeRepository)
    {
        _showtimeRepository = showtimeRepository;
    }

    [HttpGet("movie/{movieId}")]
    public async Task<IActionResult> GetShowtimesByMovieId(string movieId)
    {
        try
        {
            var showtimes = await _showtimeRepository.GetShowtimesByMovieId(movieId);

            return Ok(showtimes);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
