using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.src.Domain.Entities.Theaters;

public class Seat
{
    [BsonElement("seatId")]
    public required string SeatId { get; set; }
}