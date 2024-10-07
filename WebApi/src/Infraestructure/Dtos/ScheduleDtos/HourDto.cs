namespace WebApi.src.Infraestructure.Dtos.ScheduleDtos;

public record HourDto
(
    string Id,
    string Showtime,
    string DayScheduleId,
    string TheaterId,
    decimal Price,
    List<string> ReservedSeats,
    bool IsAvailable
);
