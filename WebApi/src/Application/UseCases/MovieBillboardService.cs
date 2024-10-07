using Domain;
using Infraestructure.Repositories.Abstractions;
using Application.UseCaseAbstractions;

namespace Application.UseCases;

public class MovieBillboardService : IMovieBillboardService
{
    private readonly IMovieRepository _movieRepository;

    public MovieBillboardService(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;
    }

    public List<Movie> GetActiveMovies()
    {
        var movies = _movieRepository.GetActiveMovies();

        return movies;
    }

    public Movie? GetMovieById(string movieId)
    {
        var movies = _movieRepository.GetMovieById(movieId);

        return movies;
    }
}