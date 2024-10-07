using Domain;
using Infraestructure.Repositories.Abstractions;
using Infraestructure.Data;
using MongoDB.Driver;

namespace Infraestructure.Repositories;

public class ShowtimeRepository : IShowtimeRepository
{
    private readonly IMongoDatabase _database;
    private readonly IMongoCollection<Schedule> _scheduleCollection;
    private readonly IMongoCollection<Hour> _hourCollection;

    public ShowtimeRepository(DatabaseConfig databaseConfig)
    {
        _database = databaseConfig.GetDatabase();
        _scheduleCollection = _database.GetCollection<Schedule>("schedules");
        _hourCollection = _database.GetCollection<Hour>("hours");
    }

    public List<Schedule> GetSchedulesByMovieId(string movieId)
    {
        return _scheduleCollection.Find(schedule => schedule.MovieId == movieId).ToList();
    }

    public List<Hour> GetHoursByScheduleId(string scheduleId)
    {
        return _hourCollection.Find(hour => hour.DayScheduleId == scheduleId).ToList();
    }

    public List<object> GetShowtimesByMovieId(string movieId)
    {
        var schedules = GetSchedulesByMovieId(movieId);
        
        return schedules.Select(schedule => new
        {
            Date = schedule.Date,
            Hours = GetHoursByScheduleId(schedule.Id)
        }).ToList<object>();
    }

    public Hour GetHourById(string hourId)
    {
        var filter = Builders<Hour>.Filter.Eq(h => h.Id, hourId);
        return _hourCollection.Find(filter).FirstOrDefault();
    }

    public void UpdateHour(Hour hour)
    {
        var filter = Builders<Hour>.Filter.Eq(h => h.Id, hour.Id);
        _hourCollection.ReplaceOne(filter, hour);
    }
}
