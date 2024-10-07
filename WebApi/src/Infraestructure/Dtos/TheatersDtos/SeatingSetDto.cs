namespace WebApi.src.Infraestructure.Dtos.TheatersDtos;

public record SeatingSetDto(
    int Columns,
    int Rows,
    List<SeatDto> Seats
);