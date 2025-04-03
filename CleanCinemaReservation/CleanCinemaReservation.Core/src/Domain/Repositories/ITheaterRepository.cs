using CleanCinemaReservation.Core.src.Domain.Entities.Theaters;

namespace CleanCinemaReservation.Core.src.Domain.Repositories;

public interface ITheaterRepository
{
    public Theater GetById(string theaterId);
}
