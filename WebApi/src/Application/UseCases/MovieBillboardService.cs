using Domain;
using Infraestructure.Repositories.Abstractions;
using Application.UseCaseAbstractions;
using Infraestructure.Cache;

namespace Application.UseCases;

public class MovieBillboardService : IMovieBillboardService
{
    private readonly IMovieRepository _movieRepository;
    private readonly ICacheService _cacheService;

    public MovieBillboardService(IMovieRepository movieRepository,
                                    ICacheService cacheService)
    {
        _movieRepository = movieRepository;
        _cacheService = cacheService;
    }

    public async Task<List<Movie>> GetActiveMovies()
    {
        const string cacheKey = "active_movies";
        var cachedMovies = await _cacheService.GetAsync<List<Movie>>(cacheKey);

        if (cachedMovies != null)
        {
            return cachedMovies;
        }

        var movies = _movieRepository.GetActiveMovies();

        await _cacheService.SetAsync(cacheKey, movies, TimeSpan.FromMinutes(5));

        return movies;
    }

    public async Task<Movie?> GetMovieById(string movieId)
    {
        var cacheKey = $"movie_{movieId}";
        var cachedMovie = await _cacheService.GetAsync<Movie>(cacheKey);

        if (cachedMovie != null)
        {
            return cachedMovie;
        }

        var movie = _movieRepository.GetMovieById(movieId);

        if (movie != null)
        {
            await _cacheService.SetAsync(cacheKey, movie, TimeSpan.FromMinutes(10));
        }

        return movie;
    }
}