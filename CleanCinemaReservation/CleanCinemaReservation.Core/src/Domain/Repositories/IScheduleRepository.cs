using CleanCinemaReservation.Core.src.Domain.Entities.Schedules;

namespace CleanCinemaReservation.Core.src.Domain.Repositories;

public interface IScheduleRepository
{
    Schedule? GetScheduleById(string scheduleId);
}
