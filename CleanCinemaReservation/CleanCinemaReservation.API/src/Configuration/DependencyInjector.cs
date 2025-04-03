using CleanCinemaReservation.Core.src.Application.Interfaces;
using CleanCinemaReservation.Core.src.Domain.Repositories;
using CleanCinemaReservation.Infrastructure.src.Caching;
using CleanCinemaReservation.Infrastructure.src.Persistence.Repositories;
using CleanCinemaReservation.Infrastructure.src.Services;

namespace CleanCinemaReservation.API.src.Configuration;

public static class DependencyInjector
{
    public static void InjectDependencies(this IServiceCollection services)
    {
        InjectRepositories(services);
        InjectServices(services);
        services.AddScoped<ICacheService, RedisCacheService>();
    }

    private static void InjectRepositories(IServiceCollection services)
    {
        services.AddScoped<IMovieRepository, MovieRepository>();
        services.AddScoped<ITheaterRepository, TheaterRepository>();
        services.AddScoped<IShowtimeRepository, ShowtimeRepository>();
        services.AddScoped<IPurchaseRepository, PurchaseRepository>();
        services.AddScoped<IScheduleRepository, ScheduleRepository>();
    }

    private static void InjectServices(IServiceCollection services)
    {
        services.AddScoped<IMovieBillboardService, MovieBillboardService>();
        services.AddScoped<ITheaterService, TheaterService>();
    }

}
