using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CleanCinemaReservation.Core.src.Domain.Entities;

public class Client
{
    [BsonElement("ci")]
    public required long Ci { get; set; }

    [BsonElement("fullName")]
    public required string FullName { get; set; }

    [BsonElement("email")]
    public required string Email { get; set; }
}
