using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class Hour
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; }

    [BsonElement("hour")]
    public required string Showtime { get; set; }

    [BsonElement("dayScheduleId")]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string DayScheduleId { get; set; }

    [BsonElement("theaterId")]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string TheaterId { get; set; }

    [BsonElement("price")]
    public required decimal Price { get; set; }

    [BsonElement("reservedSeats")]
    public required List<string> ReservedSeats { get; set; }

    [BsonElement("isAvailable")]
    public required bool IsAvailable { get; set; }
}
