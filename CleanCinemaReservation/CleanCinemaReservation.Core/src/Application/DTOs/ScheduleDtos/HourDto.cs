namespace CleanCinemaReservation.Core.src.Application.DTOs.ScheduleDtos;

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
