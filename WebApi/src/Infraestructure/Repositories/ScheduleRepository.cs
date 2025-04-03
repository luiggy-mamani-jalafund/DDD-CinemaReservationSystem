using Domain;
using Infraestructure.Data;
using Infraestructure.Repositories.Abstractions;
using MongoDB.Driver;

namespace Infraestructure.Repositories
{
    public class ScheduleRepository : IScheduleRepository
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Schedule> _scheduleCollection;

        public ScheduleRepository(DatabaseConfig databaseConfig)
        {
            _database = databaseConfig.GetDatabase();
            _scheduleCollection = _database.GetCollection<Schedule>("schedules");
        }

        public Schedule? GetScheduleById(string scheduleId)
        {
            var filter = Builders<Schedule>.Filter.Eq(s => s.Id, scheduleId);
            return _scheduleCollection.Find(filter).FirstOrDefault();
        }
    }
}