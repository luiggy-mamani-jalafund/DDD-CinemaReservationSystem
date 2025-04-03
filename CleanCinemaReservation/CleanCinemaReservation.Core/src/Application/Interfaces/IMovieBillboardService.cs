using CleanCinemaReservation.Core.src.Domain.Entities;

namespace CleanCinemaReservation.Core.src.Application.Interfaces;

public interface IMovieBillboardService
{
    public Task<List<Movie>> GetActiveMovies();

    public Task<Movie?> GetMovieById(string movieId);
}

