export async function getSeatsOccupied(schedule, theater) {
    try {
        let response = await fetch(
            "http://localhost:5011/api/theaters/occupiedseats",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    seatingSet: theater.seatingSet,
                    reservedSeats: schedule.reservedSeats,
                }),
            },
        );
        let seatsOccupied = await response.json();

        return seatsOccupied;
    } catch (_) {
        return [];
    }
}

export async function getTheaterById(theaterId) {
    let response = await fetch(
        `http://localhost:5011/api/theaters/${theaterId}`,
    );
    let theater = await response.json();

    return theater;
}
