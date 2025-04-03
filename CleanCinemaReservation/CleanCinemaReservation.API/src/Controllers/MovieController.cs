using AutoMapper;
using CleanCinemaReservation.Core.src.Application.DTOs;
using CleanCinemaReservation.Core.src.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace CleanCinemaReservation.API.src.Controllers;

[ApiController]
[Route("api/[controller]")]
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
    public async Task<IActionResult> GetActiveMovies()
    {
        var movies = await _movieBillboardService.GetActiveMovies();
        var moviesResponse = _mapper.Map<MovieDto[]>(movies);

        return Ok(moviesResponse);
    }

    [HttpGet("{movieId}")]
    public async Task<IActionResult> GetMovieById(string movieId)
    {
        if (!ObjectId.TryParse(movieId, out _))
        {
            return BadRequest("Invalid movie ID.");
        }

        var movie = await _movieBillboardService.GetMovieById(movieId);

        if (movie == null)
        {
            return NotFound();
        }

        return Ok(movie);
    }

}
