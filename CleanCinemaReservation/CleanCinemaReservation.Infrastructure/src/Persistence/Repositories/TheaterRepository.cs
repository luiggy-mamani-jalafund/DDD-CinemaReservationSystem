using CleanCinemaReservation.Core.src.Domain.Entities.Theaters;
using CleanCinemaReservation.Core.src.Domain.Repositories;
using CleanCinemaReservation.Infrastructure.src.Persistence.Configurations;
using MongoDB.Driver;

namespace CleanCinemaReservation.Infrastructure.src.Persistence.Repositories;

public class TheaterRepository : ITheaterRepository
{
    private readonly IMongoDatabase _database;
    private readonly IMongoCollection<Theater> _theaterCollection;

    public TheaterRepository(DatabaseConfig databaseConfig)
    {
        _database = databaseConfig.GetDatabase();
        _theaterCollection = _database.GetCollection<Theater>("theaters");
    }

    public Theater GetById(string theaterId)
    {
        var filter = Builders<Theater>.Filter.Eq(t => t.Id, theaterId);
        var theater = _theaterCollection.Find(filter).FirstOrDefault();

        return theater;
    }
}
