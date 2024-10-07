export async function purchase(purchaseObj) {
    let response = await fetch(
        "http://localhost:5011/api/Purchase/confirmPurchase",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchaseObj),
        },
    );
    let seatsOccupied = await response.json();

    return seatsOccupied;
}
