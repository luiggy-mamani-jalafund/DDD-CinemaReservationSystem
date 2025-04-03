using CleanCinemaReservation.Core.src.Domain.Entities;

namespace CleanCinemaReservation.Core.src.Domain.Repositories;

public interface IMovieRepository
{
    List<Movie> GetActiveMovies();
    List<Movie> GetAllMovies();

    Movie? GetMovieById(string movieId);
}
