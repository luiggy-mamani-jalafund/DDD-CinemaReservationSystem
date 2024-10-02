using Domain;

namespace Infraestructure.Repositories.Abstractions;

public interface IMovieRepository
{
    List<Movie> GetActiveMovies();

    List<Movie> GetAllMovies();

    Movie? GetMovieById(string movieId);
}
