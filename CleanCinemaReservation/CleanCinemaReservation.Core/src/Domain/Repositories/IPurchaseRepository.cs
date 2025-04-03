using CleanCinemaReservation.Core.src.Domain.Entities.Schedules;

namespace CleanCinemaReservation.Core.src.Domain.Repositories;

public interface IPurchaseRepository
{
    void SavePurchase(Purchase purchase);
}
