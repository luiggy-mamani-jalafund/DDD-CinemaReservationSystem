using AutoMapper;
using CleanCinemaReservation.Core.src.Application.DTOs;
using CleanCinemaReservation.Core.src.Application.DTOs.ScheduleDtos;
using CleanCinemaReservation.Core.src.Application.DTOs.TheatersDtos;
using CleanCinemaReservation.Core.src.Domain.Entities;
using CleanCinemaReservation.Core.src.Domain.Entities.Schedules;
using CleanCinemaReservation.Core.src.Domain.Entities.Theaters;

namespace CleanCinemaReservation.Infrastructure.src.Common;

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
