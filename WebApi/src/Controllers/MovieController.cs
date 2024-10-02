using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Application.UseCaseAbstractions;
using Infraestructure.Dtos;
using MongoDB.Bson;

namespace Controllers.Concrete;

[ApiController]
[Route("api/movies")]
public class MovieController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IMovieBillboardService _movieBillboardService;

    public MovieController(IMovieBillboardService movieBillboardService, IMapper mapper)
    {
        _movieBillboardService = movieBillboardService;
        _mapper = mapper;
    }

    [HttpGet("active")]
    public IActionResult GetActiveMovies()
    {
        var movies = _movieBillboardService.GetActiveMovies();
        var moviesResponse = _mapper.Map<MovieDto[]>(movies);

        return Ok(moviesResponse);
    }

    [HttpGet("{movieId}")]
    public IActionResult GetMovieById(string movieId)
    {
        if (!ObjectId.TryParse(movieId, out _))
        {
            return BadRequest("Invalid movie ID.");
        }

        var movie = _movieBillboardService.GetMovieById(movieId);

        if (movie == null)
        {
            return NotFound();
        }

        return Ok(movie);
    }

}