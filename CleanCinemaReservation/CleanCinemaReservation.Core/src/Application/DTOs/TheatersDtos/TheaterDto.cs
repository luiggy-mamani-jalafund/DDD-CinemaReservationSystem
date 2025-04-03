namespace CleanCinemaReservation.Core.src.Application.DTOs.TheatersDtos;

public record TheaterDto(
    string Id,
    string Name,
    List<SeatingSetDto> SeatingSet
);
