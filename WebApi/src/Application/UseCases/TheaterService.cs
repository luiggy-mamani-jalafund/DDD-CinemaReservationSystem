using Domain;
using WebApi.src.Application.UseCaseAbstractions;
using WebApi.src.Application.Utils;
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

    public List<Seat> GetOccupiedSeats(List<SeatingSet> seatingSet, List<string> reservedSeats)
    {
        var occupiedSeats = new List<Seat>();

        foreach (var reservedSeat in reservedSeats)
        {
            foreach (var singleSeatingSet in seatingSet)
            {
                var seatFound = SeatAvailabilityChecker.FindSeatByIdOnSectionTheater(singleSeatingSet, reservedSeat);
                if (seatFound is not null)
                {
                    occupiedSeats.Add(seatFound);
                }
            }
        }

        return occupiedSeats;
    }
}