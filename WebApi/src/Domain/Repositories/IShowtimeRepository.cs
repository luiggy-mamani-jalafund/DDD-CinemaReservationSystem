using Domain;

namespace Infraestructure.Repositories.Abstractions;

public interface IShowtimeRepository
{
    List<Schedule> GetSchedulesByMovieId(string movieId);

    List<Hour> GetHoursByScheduleId(string scheduleId);

    List<object> GetShowtimesByMovieId(string movieId);
}
