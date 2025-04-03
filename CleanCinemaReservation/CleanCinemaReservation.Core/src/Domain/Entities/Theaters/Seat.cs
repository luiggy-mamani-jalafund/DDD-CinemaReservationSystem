using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CleanCinemaReservation.Core.src.Domain.Entities.Theaters;

public class Seat
{
    [BsonElement("seatId")]
    public required string SeatId { get; set; }
}
