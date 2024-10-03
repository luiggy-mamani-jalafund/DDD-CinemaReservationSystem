using Domain;

namespace Application.UseCaseAbstractions;

public interface IMovieBillboardService
{
    public List<Movie> GetActiveMovies();

    public Movie? GetMovieById(string movieId);
}