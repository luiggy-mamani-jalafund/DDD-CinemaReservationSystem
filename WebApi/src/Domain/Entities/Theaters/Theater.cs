using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.src.Domain.Entities.Theaters;

public class Theater
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public required string Id { get; set; }

    [BsonElement("name")]
    public required string Name { get; set; }

    [BsonElement("seatingSet")]
    public required List<SeatingSet> SeatingSet { get; set; }
}
