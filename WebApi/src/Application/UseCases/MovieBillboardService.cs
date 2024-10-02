using Domain;
using Infraestructure.Repositories.Abstractions;
using WebApi.src.Application.UseCaseAbstractions;

namespace WebApi.src.Application.UseCases;

public class MovieBillboardService : IMovieBillboardService
{
    private readonly IMovieRepository _movieRepository;

    public MovieBillboardService(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }

    public List<Movie> GetActiveMovies() {
        var movies = _movieRepository.GetActiveMovies();

        return movies;
    }
}