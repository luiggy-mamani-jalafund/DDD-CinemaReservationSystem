using Domain;

namespace Application.UseCaseAbstractions;

public interface IMovieBillboardService
{
    public Task<List<Movie>> GetActiveMovies();

    public Movie? GetMovieById(string movieId);
}