using AutoMapper;
using CleanCinemaReservation.Core.src.Application.DTOs.ScheduleDtos;
using CleanCinemaReservation.Core.src.Application.Interfaces;
using CleanCinemaReservation.Core.src.Domain.Entities.Schedules;
using CleanCinemaReservation.Core.src.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CleanCinemaReservation.API.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PurchaseController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IPurchaseRepository _purchaseRepository;
    private readonly IShowtimeRepository _showtimeRepository;
    private readonly ITheaterRepository _theaterRepository;
    private readonly ICacheService _cacheService;

    public PurchaseController(
        IPurchaseRepository purchaseRespository,
        IMapper mapper,
        IShowtimeRepository showtimeRepository,
        ICacheService cacheService,
        ITheaterRepository theaterRepository)
    {
        _purchaseRepository = purchaseRespository;
        _mapper = mapper;
        _showtimeRepository = showtimeRepository;
        _cacheService = cacheService;
        _theaterRepository = theaterRepository;
    }

    [HttpPost("confirmPurchase")]
    public async Task<IActionResult> ConfirmReservation([FromBody] PurchaseDto purchaseDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        if (!IsPaymentValid(purchaseDto))
        {
            return BadRequest("Payment information is not valid.");
        }

        var purchase = _mapper.Map<Purchase>(purchaseDto);

        purchase.CreatedAt = DateTime.Now;

        try
        {
            _purchaseRepository.SavePurchase(purchase);

            var hour = _showtimeRepository.GetHourById(purchaseDto.HourScheduleId);

            if (hour == null)
            {
                return NotFound($"Hour with id {purchaseDto.HourScheduleId} not found.");
            }

            hour.ReservedSeats.AddRange(purchaseDto.ReservedSeats);

            if (AreAllSeatsReserved(hour))
            {
                hour.IsAvailable = false;
            }

            _showtimeRepository.UpdateHour(hour);

            var schedule = _showtimeRepository.GetScheduleByHourId(hour.Id);
            if (schedule != null)
            {
                var cacheKey = $"showtimes_movie_{schedule.MovieId}";
                await _cacheService.RemoveAsync(cacheKey);
            }

            return Ok("Reservation confirmed and saved successfully.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    private bool AreAllSeatsReserved(Hour hour)
    {
        // Obtener el total de asientos del Theater
        var theater = _theaterRepository.GetById(hour.TheaterId);
        if (theater == null)
        {
            return false;
        }

        var totalSeats = theater.SeatingSet.Sum(set => set.Seats.Count);

        // Comparar con los asientos reservados
        return hour.ReservedSeats.Count >= totalSeats;
    }

    private bool IsPaymentValid(PurchaseDto purchaseDto)
    {
        if (string.IsNullOrEmpty(purchaseDto.Client.Email) ||
            !purchaseDto.Client.Email.Contains("@"))
        {
            return false;
        }
        return true;
    }
}
