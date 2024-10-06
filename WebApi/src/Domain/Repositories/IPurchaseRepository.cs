using Domain.Entities.Schedules;

namespace Domain.Repositories;

public interface IPurchaseRepository
{
    void SavePurchase(Purchase purchase);
}
