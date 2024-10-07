namespace WebApi.src.Infraestructure.Dtos.TheatersDtos;

public record RequestForOccupiedSeats(
    List<SeatingSetDto> SeatingSet,
    List<string> ReservedSeats
);