using Microsoft.AspNetCore.Mvc;
using Infraestructure.Repositories.Abstractions;

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
}