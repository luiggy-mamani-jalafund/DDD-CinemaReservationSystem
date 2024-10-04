using Microsoft.AspNetCore.Mvc;
using Infraestructure.Repositories.Abstractions;

namespace Controllers.Concrete;

[ApiController]
[Route("api/Showtime")]
public class ShowtimeController : ControllerBase
{
    private readonly IShowtimeRepository _showtimeRepository;

    public ShowtimeController(IShowtimeRepository showtimeRepository)
    {
        _showtimeRepository = showtimeRepository;
    }

    [HttpGet("{movieId}")]
    public IActionResult GetShowtimesByMovieId(string movieId)
    {
        var showtimes = _showtimeRepository.GetShowtimesByMovieId(movieId);
        return Ok(showtimes);
    }
}