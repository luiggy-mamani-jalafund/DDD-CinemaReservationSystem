using CleanCinemaReservation.Core.src.Application.Interfaces;
using CleanCinemaReservation.Core.src.Application.Utils;
using CleanCinemaReservation.Core.src.Domain.Entities.Theaters;
using CleanCinemaReservation.Core.src.Domain.Repositories;

namespace CleanCinemaReservation.Infrastructure.src.Services;

public class TheaterService : ITheaterService
{
    private readonly ITheaterRepository _theaterRepository;
    private readonly ICacheService _cacheService;

    public TheaterService(ITheaterRepository theaterRepository, ICacheService cacheService)
    {
        _theaterRepository = theaterRepository;
        _cacheService = cacheService;
    }

    public async Task<Theater> GetById(string theaterId)
    {
        var cacheKey = $"theater_{theaterId}";
        var cachedTheater = await _cacheService.GetAsync<Theater>(cacheKey);

        if (cachedTheater != null)
        {
            return cachedTheater;
        }

        var theater = _theaterRepository.GetById(theaterId);

        if (theater != null)
        {
            await _cacheService.SetAsync(cacheKey, theater, TimeSpan.FromMinutes(5));
        }

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

