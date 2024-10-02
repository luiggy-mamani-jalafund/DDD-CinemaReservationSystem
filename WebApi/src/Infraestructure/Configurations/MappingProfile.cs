using AutoMapper;
using Domain;
using Infraestructure.Dtos;

namespace Infraestructure.Configurations;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Movie, MovieDto>();
    }
}