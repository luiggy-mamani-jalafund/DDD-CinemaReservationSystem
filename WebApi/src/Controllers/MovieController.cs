using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApi.src.Application.UseCaseAbstractions;
using WebApi.src.Infraestructure.Dtos;

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
}