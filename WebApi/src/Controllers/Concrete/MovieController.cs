using Microsoft.AspNetCore.Mvc;
using Infraestructure.Repositories.Abstractions;
using MongoDB.Bson;

namespace Controllers.Concrete;

[ApiController]
[Route("api/[controller]")]
public class MovieController : ControllerBase
{
    private readonly IMovieRepository _movieRepository;

    public MovieController(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }

    [HttpGet("active")]
    public IActionResult GetActiveMovies()
    {
        var movies = _movieRepository.GetActiveMovies();
        return Ok(movies);
    }

    [HttpGet]
    public IActionResult GetAllMovies()
    {
        var movies = _movieRepository.GetAllMovies();
        return Ok(movies);
    }

    [HttpGet("{movieId}")]
    public IActionResult GetMovieById(string movieId)
    {
        if (!ObjectId.TryParse(movieId, out _))
        {
            return BadRequest("Invalid movie ID.");
        }

        var movie = _movieRepository.GetMovieById(movieId);

        if (movie == null)
        {
            return NotFound();
        }

        return Ok(movie);
    }
}