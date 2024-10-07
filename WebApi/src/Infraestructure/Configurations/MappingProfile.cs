using AutoMapper;
using Domain;
using WebApi.src.Domain.Entities.Theaters;
using WebApi.src.Infraestructure.Dtos.TheatersDtos;
using Infraestructure.Dtos;
using WebApi.src.Infraestructure.Dtos.ScheduleDtos;
using Domain.Entities.Schedules;
using Infraestructure.Dtos.ScheduleDtos;
using Domain.Entities;

namespace Infraestructure.Configurations;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        MappingMovies();
        MappingTheaters();
        MappingShedules();
        MappingPurchase();
    }

    private void MappingMovies()
    {
        CreateMap<Movie, MovieDto>();
    }

    private void MappingTheaters()
    {
        CreateMap<Theater, TheaterDto>();
        CreateMap<TheaterDto, Theater>();
        CreateMap<SeatingSet, SeatingSetDto>();
        CreateMap<SeatingSetDto, SeatingSet>();
        CreateMap<Seat, SeatDto>();
        CreateMap<SeatDto, Seat>();
    }

    private void MappingShedules()
    {
        CreateMap<Schedule, ScheduleDto>();
        CreateMap<ScheduleDto, Schedule>();
        CreateMap<Hour, HourDto>();
        CreateMap<HourDto, Hour>();
    }

    private void MappingPurchase()
    {
        CreateMap<PurchaseDto, Purchase>();
        CreateMap<ClientDto, Client>();
    }
}