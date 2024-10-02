using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApi.src.Application.UseCaseAbstractions;
using WebApi.src.Infraestructure.Dtos.TheatersDtos;

namespace Controllers.Concrete;

[ApiController]
[Route("api/theaters")]
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
    public IActionResult GetTheaterById(string id)
    {
        try
        {
            var theater = _theaterService.GetById(id);
            var theaterResponse = _mapper.Map<TheaterDto>(theater);

            return Ok(theaterResponse);
        }
        catch (Exception exception)
        {
            return StatusCode(500, $"Internal server error: {exception.Message}");
        }
    }
}