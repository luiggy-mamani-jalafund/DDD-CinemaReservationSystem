using Swashbuckle.AspNetCore.SwaggerUI;

namespace Infraestructure.Configurations;

public static class SwaggerConfigurator
{
    public static void ConfigureSwaggerUI(SwaggerUIOptions options)
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
        options.RoutePrefix = String.Empty;
    }
}