using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain.Entities.Schedules;

public class Purchase
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; }

    [BsonElement("hourScheduleId")]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string HourScheduleId { get; set; }

    [BsonElement("reservedSeats")]
    public required List<string> ReservedSeats { get; set; }

    [BsonElement("createdAt")]
    public required DateTime CreatedAt { get; set; }

    [BsonElement("client")]
    public required Client Client { get; set; }
}
