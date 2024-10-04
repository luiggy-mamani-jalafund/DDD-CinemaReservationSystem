using System.Text.RegularExpressions;
using WebApi.src.Domain.Entities.Theaters;

namespace WebApi.src.Application.Utils;

public static class SeatAvailabilityChecker
{
    public static Seat? FindSeatByIdOnSectionTheater(SeatingSet seatingSet, string seatId)
    {
        if (!seatingSet.Seats.Any())
        {
            return default;
        }

        var baseSubSeatId = GetSubSeatId(seatingSet.Seats[0].SeatId);
        var subSeatId = RemoveSeatNumber(seatId, out int seatNumber);

        if (baseSubSeatId != subSeatId)
        {
            return default;
        }

        if (seatNumber == -1)
        {
            return default;
        }

        return seatingSet.Seats[seatNumber - 1];

    }

    public static string GetSubSeatId(string seatId)
    {
        var subSeatId = Regex.Replace(seatId, @"-\d+$", "");

        return subSeatId;
    }

    private static string RemoveSeatNumber(string input, out int extractedNumber)
    {
        Match match = Regex.Match(input, @"-(\d+)$");

        if (match.Success)
        {
            extractedNumber = int.Parse(match.Groups[1].Value);
            return input.Substring(0, match.Index);
        }

        extractedNumber = -1;
        return input;
    }
}