using Microsoft.AspNetCore.Cors.Infrastructure;

namespace CleanCinemaReservation.API.src.Configuration;

public static class CorsConfigurator
{
    public static void ConfigureCors(CorsOptions options)
    {
        options.AddPolicy("CorsPolicy", policy =>
            {
                policy.AllowAnyOrigin()
                      .AllowAnyMethod()
                      .AllowAnyHeader();
            });
    }
}
