using Domain;

namespace Infraestructure.Repositories.Abstractions
{
    public interface IScheduleRepository
    {
        Schedule? GetScheduleById(string scheduleId);
    }
}