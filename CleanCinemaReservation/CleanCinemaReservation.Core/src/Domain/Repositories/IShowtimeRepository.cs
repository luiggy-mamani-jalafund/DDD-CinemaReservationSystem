using CleanCinemaReservation.Core.src.Domain.Entities.Schedules;

namespace CleanCinemaReservation.Core.src.Domain.Repositories;

public interface IShowtimeRepository
{
    Task<List<object>> GetShowtimesByMovieId(string movieId);
    List<Schedule> GetSchedulesByMovieId(string movieId);
    List<Hour> GetHoursByScheduleId(string scheduleId);
    Hour? GetHourById(string hourId);
    void UpdateHour(Hour hour);
    Schedule? GetScheduleByHourId(string hourId);
}

