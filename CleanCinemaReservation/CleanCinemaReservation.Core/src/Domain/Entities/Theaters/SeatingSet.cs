using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CleanCinemaReservation.Core.src.Domain.Entities.Theaters;

public class SeatingSet
{
    [BsonElement("columns")]
    public required int Columns { get; set; }

    [BsonElement("rows")]
    public required int Rows { get; set; }

    [BsonElement("seats")]
    public required List<Seat> Seats { get; set; }
}
