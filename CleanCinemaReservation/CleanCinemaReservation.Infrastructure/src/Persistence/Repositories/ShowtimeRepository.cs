using CleanCinemaReservation.Core.src.Application.Interfaces;
using CleanCinemaReservation.Core.src.Domain.Entities.Schedules;
using CleanCinemaReservation.Core.src.Domain.Repositories;
using CleanCinemaReservation.Infrastructure.src.Persistence.Configurations;
using MongoDB.Driver;

namespace CleanCinemaReservation.Infrastructure.src.Persistence.Repositories;

public class ShowtimeRepository : IShowtimeRepository
{
    private readonly IMongoDatabase _database;
    private readonly IMongoCollection<Schedule> _scheduleCollection;
    private readonly IMongoCollection<Hour> _hourCollection;
    private readonly ICacheService _cacheService;

    public ShowtimeRepository(DatabaseConfig databaseConfig, ICacheService cacheService)
    {
        _database = databaseConfig.GetDatabase();
        _scheduleCollection = _database.GetCollection<Schedule>("schedules");
        _hourCollection = _database.GetCollection<Hour>("hours");
        _cacheService = cacheService;
    }

    public async Task<List<object>> GetShowtimesByMovieId(string movieId)
    {
        var cacheKey = $"showtimes_movie_{movieId}";
        var cachedShowtimes = await _cacheService.GetAsync<List<object>>(cacheKey);

        if (cachedShowtimes != null)
        {
            return cachedShowtimes;
        }

        var schedules = GetSchedulesByMovieId(movieId);

        var showtimes = schedules.Select(schedule => new
        {
            Date = schedule.Date,
            Hours = GetHoursByScheduleId(schedule.Id)
        }).ToList<object>();

        await _cacheService.SetAsync(cacheKey, showtimes, TimeSpan.FromMinutes(5));

        return showtimes;
    }

    public List<Schedule> GetSchedulesByMovieId(string movieId)
    {
        return _scheduleCollection.Find(schedule => schedule.MovieId == movieId).ToList();
    }

    public List<Hour> GetHoursByScheduleId(string scheduleId)
    {
        return _hourCollection.Find(hour => hour.DayScheduleId == scheduleId).ToList();
    }

    public Hour? GetHourById(string hourId)
    {
        var filter = Builders<Hour>.Filter.Eq(h => h.Id, hourId);
        return _hourCollection.Find(filter).FirstOrDefault();
    }

    public void UpdateHour(Hour hour)
    {
        var filter = Builders<Hour>.Filter.Eq(h => h.Id, hour.Id);
        _hourCollection.ReplaceOne(filter, hour);

        var schedule = _scheduleCollection.Find(s => s.Id == hour.DayScheduleId).FirstOrDefault();
        if (schedule != null)
        {
            var cacheKey = $"showtimes_movie_{schedule.MovieId}";
            _cacheService.RemoveAsync(cacheKey).Wait();
        }
    }

    public Schedule? GetScheduleByHourId(string hourId)
    {
        var hour = _hourCollection.Find(h => h.Id == hourId).FirstOrDefault();
        if (hour == null) return null;

        return _scheduleCollection.Find(s => s.Id == hour.DayScheduleId).FirstOrDefault();
    }
}
