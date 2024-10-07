namespace Infraestructure.Dtos.ScheduleDtos;

public class PurchaseDto
{
    public string? Id { get; internal set; }
    public required string HourScheduleId { get; set; }
    public required List<string> ReservedSeats { get; set; }
    public required ClientDto Client { get; set; }
    
}
