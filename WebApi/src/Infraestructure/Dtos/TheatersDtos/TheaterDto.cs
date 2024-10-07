namespace WebApi.src.Infraestructure.Dtos.TheatersDtos;

public record TheaterDto(
    string Id,
    string Name,
    List<SeatingSetDto> SeatingSet
);