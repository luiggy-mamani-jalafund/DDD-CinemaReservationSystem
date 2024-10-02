using Domain;

namespace WebApi.src.Application.UseCaseAbstractions;

public interface IMovieBillboardService
{
    public List<Movie> GetActiveMovies();
}