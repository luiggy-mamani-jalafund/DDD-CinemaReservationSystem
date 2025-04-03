namespace CleanCinemaReservation.Core.src.Application.DTOs.TheatersDtos;

public record RequestForOccupiedSeats(
    List<SeatingSetDto> SeatingSet,
    List<string> ReservedSeats
);

