using Infraestructure.Data;
using WebApi.src.Infraestructure.Configurations;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddSingleton<DatabaseConfig>();
builder.Services.AddControllers();
builder.Services.InjectDependencies();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(SwaggerConfigurator.ConfigureSwaggerUI);
}

app.UseRouting();
app.MapControllers();
app.Run();
