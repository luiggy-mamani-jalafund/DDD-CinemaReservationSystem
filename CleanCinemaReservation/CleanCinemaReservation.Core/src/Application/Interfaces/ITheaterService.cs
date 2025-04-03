using CleanCinemaReservation.Core.src.Domain.Entities.Theaters;

namespace CleanCinemaReservation.Core.src.Application.Interfaces;

public interface ITheaterService
{
    Task<Theater> GetById(string theaterId);
    List<Seat> GetOccupiedSeats(List<SeatingSet> seatingSet, List<string> reservedSeats);
}
