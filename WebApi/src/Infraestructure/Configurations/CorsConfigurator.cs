using Microsoft.AspNetCore.Cors.Infrastructure;

namespace WebApi.src.Infraestructure.Configurations;

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