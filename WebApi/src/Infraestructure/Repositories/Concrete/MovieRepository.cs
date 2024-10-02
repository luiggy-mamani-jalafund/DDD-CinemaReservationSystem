using Domain;
using Infraestructure.Data;
using Infraestructure.Repositories.Abstractions;
using MongoDB.Driver;

namespace Infraestructure.Repositories;

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
        return _movieCollection.Find(d => true).ToList();
    }

    public Movie? GetMovieById(string movieId)
    {
        var filter = Builders<Movie>.Filter.Eq(m => m.Id, movieId);
        return _movieCollection.Find(filter).FirstOrDefault();
    }

}
