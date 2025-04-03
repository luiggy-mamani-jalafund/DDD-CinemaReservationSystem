using CleanCinemaReservation.Core.src.Domain.Entities;
using CleanCinemaReservation.Core.src.Domain.Repositories;
using CleanCinemaReservation.Infrastructure.src.Persistence.Configurations;
using MongoDB.Driver;

namespace CleanCinemaReservation.Infrastructure.src.Persistence.Repositories;

public class MovieRepository : IMovieRepository
{
    private readonly IMongoDatabase _database;
    private readonly IMongoCollection<Movie> _movieCollection;

    public MovieRepository(DatabaseConfig databaseConfig)
    {
        _database = databaseConfig.GetDatabase();
        _movieCollection = _database.GetCollection<Movie>("movies");
    }

    public List<Movie> GetActiveMovies()
    {
        var filter = Builders<Movie>.Filter.Eq(m => m.IsActive, true);
        var activeMovies = _movieCollection.Find(filter).ToList();
        
        return activeMovies;
    }

    public List<Movie> GetAllMovies()
    {
        var allMovies = _movieCollection.Find(d => true);

        return allMovies.ToList();
    }

    public Movie? GetMovieById(string movieId)
    {
        var filter = Builders<Movie>.Filter.Eq(m => m.Id, movieId);
        return _movieCollection.Find(filter).FirstOrDefault();
    }

}
