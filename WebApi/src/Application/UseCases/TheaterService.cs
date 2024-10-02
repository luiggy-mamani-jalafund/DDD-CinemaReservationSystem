using WebApi.src.Application.UseCaseAbstractions;
using WebApi.src.Domain.Entities.Theaters;
using WebApi.src.Domain.Repositories;

namespace WebApi.src.Application.UseCases;

public class TheaterService : ITheaterService
{
    private readonly ITheaterRepository _theaterRepository;

    public TheaterService(ITheaterRepository theaterRepository)
    {
        _theaterRepository = theaterRepository;
    }

    public Theater GetById(string theaterId)
    {
        var theater = _theaterRepository.GetById(theaterId);

        return theater;
    }
}