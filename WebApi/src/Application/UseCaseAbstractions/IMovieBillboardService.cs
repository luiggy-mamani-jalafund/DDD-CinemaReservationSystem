using Domain;

namespace Application.UseCaseAbstractions;

public interface IMovieBillboardService
{
    public Task<List<Movie>> GetActiveMovies();

    public Task<Movie?> GetMovieById(string movieId);
}