using Infraestructure.Repositories;
using Infraestructure.Repositories.Abstractions;
using WebApi.src.Application.UseCaseAbstractions;
using WebApi.src.Application.UseCases;
using WebApi.src.Domain.Repositories;
using WebApi.src.Infraestructure.Repositories;

namespace WebApi.src.Infraestructure.Configurations;

public static class DependencyInjector
{
    public static void InjectDependencies(this IServiceCollection services)
    {
        InjectRepositories(services);
        InjectServices(services);
    }

    private static void InjectRepositories(IServiceCollection services)
    {
        services.AddScoped<IMovieRepository, MovieRepository>();
        services.AddScoped<ITheaterRepository, TheaterRepository>();
    }

    private static void InjectServices(IServiceCollection services)
    {
        services.AddScoped<IMovieBillboardService, MovieBillboardService>();
        services.AddScoped<ITheaterService, TheaterService>();
    }

}