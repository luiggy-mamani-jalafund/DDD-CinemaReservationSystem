using Microsoft.AspNetCore.Mvc;
using Infraestructure.Dtos.ScheduleDtos;
using Domain.Entities.Schedules;
using Domain.Repositories;
using AutoMapper;

namespace Controllers;

[ApiController]
[Route("api/purchase")]
public class PurchaseController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IPurchaseRepository _purchaseService;

    public PurchaseController(IPurchaseRepository purchaseService, IMapper mapper)
    {
        _purchaseService = purchaseService;
        _mapper = mapper;
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
            _purchaseService.SavePurchase(purchase);

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