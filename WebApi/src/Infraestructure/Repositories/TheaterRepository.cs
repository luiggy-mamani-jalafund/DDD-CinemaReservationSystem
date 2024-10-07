using Infraestructure.Data;
using MongoDB.Driver;
using WebApi.src.Domain.Entities.Theaters;
using WebApi.src.Domain.Repositories;

namespace WebApi.src.Infraestructure.Repositories;

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