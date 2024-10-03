using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class Schedule
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; }

    [BsonElement("date")]
    public required string Date { get; set; }

    [BsonElement("movieId")]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string MovieId { get; set; }
}
