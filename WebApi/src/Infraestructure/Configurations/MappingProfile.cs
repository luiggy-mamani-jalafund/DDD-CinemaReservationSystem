using AutoMapper;
using Domain;
using WebApi.src.Infraestructure.Dtos;

namespace WebApi.src.Infraestructure.Configurations;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Movie, MovieDto>();
    }
}