using WebApi.src.Domain.Entities.Theaters;

namespace WebApi.src.Application.UseCaseAbstractions;

public interface ITheaterService
{
    Task<Theater> GetById(string theaterId);
    List<Seat> GetOccupiedSeats(List<SeatingSet> seatingSet, List<string> reservedSeats);
}