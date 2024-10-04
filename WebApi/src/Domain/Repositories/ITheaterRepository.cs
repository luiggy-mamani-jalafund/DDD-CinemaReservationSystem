using WebApi.src.Domain.Entities.Theaters;

namespace WebApi.src.Domain.Repositories;

public interface ITheaterRepository
{
    public Theater GetById(string theaterId);
}