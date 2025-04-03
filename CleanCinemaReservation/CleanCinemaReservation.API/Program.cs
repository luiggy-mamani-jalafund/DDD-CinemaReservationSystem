
using CleanCinemaReservation.API.src.Configuration;
using CleanCinemaReservation.Infrastructure.src.Persistence.Configurations;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IConnectionMultiplexer>(sp =>
{
    var redisConnectionString = "localhost:6379";
    return ConnectionMultiplexer.Connect(redisConnectionString);
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(CleanCinemaReservation.Infrastructure.src.Common.MappingProfile));
builder.Services.AddSingleton<DatabaseConfig>();
builder.Services.AddControllers();
builder.Services.InjectDependencies();
builder.Services.AddCors(CorsConfigurator.ConfigureCors);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(SwaggerConfigurator.ConfigureSwaggerUI);
}

app.UseRouting();
app.UseCors("CorsPolicy");
app.MapControllers();
app.Run();
