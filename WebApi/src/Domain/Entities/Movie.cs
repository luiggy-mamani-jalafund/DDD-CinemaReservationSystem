using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class Movie
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; }

    [BsonElement("title")]
    public required string Title { get; set; }

    [BsonElement("description")]
    public required string Description { get; set; }

    [BsonElement("image")]
    public required string Image { get; set; }

    [BsonElement("duration")]
    public required int Duration { get; set; }

    [BsonElement("genre")]
    public required string Genre { get; set; }

    [BsonElement("isActive")]
    public required bool IsActive { get; set; }
}
