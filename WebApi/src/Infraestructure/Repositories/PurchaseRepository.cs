using Domain.Entities.Schedules;
using Domain.Repositories;
using MongoDB.Driver;
using Infraestructure.Data;

namespace Infraestructure.Repositories;

public class PurchaseRepository : IPurchaseRepository
{
    private readonly IMongoDatabase _database;
    private readonly IMongoCollection<Purchase> _purchasesCollection;

    public PurchaseRepository(DatabaseConfig databaseConfig)
    {
        _database = databaseConfig.GetDatabase();
        _purchasesCollection = _database.GetCollection<Purchase>("purchase");
    }

    public void SavePurchase(Purchase purchase)
    {
        if (purchase == null)
        {
            throw new ArgumentNullException(nameof(purchase));
        }

        _purchasesCollection.InsertOne(purchase);
    }
}