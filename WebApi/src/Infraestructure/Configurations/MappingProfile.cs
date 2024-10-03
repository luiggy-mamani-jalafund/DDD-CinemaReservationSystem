using AutoMapper;
using Domain;
using WebApi.src.Domain.Entities.Theaters;
using WebApi.src.Infraestructure.Dtos.TheatersDtos;
using Infraestructure.Dtos;

namespace Infraestructure.Configurations;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        MappingMovies();
        MappingTheaters();
    }

    private void MappingMovies()
    {
        CreateMap<Movie, MovieDto>();
    }

    private void MappingTheaters()
    {
        CreateMap<Theater, TheaterDto>();
        CreateMap<SeatingSet, SeatingSetDto>();
        CreateMap<Seat, SeatDto>();
    }
}