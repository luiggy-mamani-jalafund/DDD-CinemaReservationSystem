namespace CleanCinemaReservation.Core.src.Application.DTOs.TheatersDtos;

public record SeatingSetDto(
    int Columns,
    int Rows,
    List<SeatDto> Seats
);

