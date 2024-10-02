namespace WebApi.src.Infraestructure.Dtos;

public record MovieDto(
    string Id,
    string Title,
    string Description,
    string Image,
    int Duration,
    string Genre,
    bool IsActive
);