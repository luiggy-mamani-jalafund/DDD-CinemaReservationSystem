using Microsoft.AspNetCore.Mvc;
using Infraestructure.Dtos.ScheduleDtos;
using Domain.Entities.Schedules;
using Domain.Repositories;
using AutoMapper;
using Infraestructure.Repositories.Abstractions;

namespace Controllers;

[ApiController]
[Route("api/Purchase")]
public class PurchaseController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IPurchaseRepository _purchaseRepository;
    private readonly IShowtimeRepository _showtimeRepository;

    public PurchaseController(IPurchaseRepository purchaseRespository, IMapper mapper, IShowtimeRepository showtimeRepository)
    {
        _purchaseRepository = purchaseRespository;
        _mapper = mapper;
        _showtimeRepository = showtimeRepository;
    }

    [HttpPost("confirmPurchase")]
    public IActionResult ConfirmReservation([FromBody] PurchaseDto purchaseDto)
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

            _showtimeRepository.UpdateHour(hour);

            return Ok("Reservation confirmed and saved successfully.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
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