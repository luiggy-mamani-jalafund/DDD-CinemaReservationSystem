"use client";
import { createContext, useState } from "react";

export const TheaterContext = createContext();

const DeafultState = {
    schedule: undefined,
    theater: undefined,
    selectedSeats: [],
    seatsOccupied: [],
};

const SeatState = {
    occupied: "occupied",
    selected: "selected",
    free: "free",
};

const TheaterProvider = ({ children }) => {
    const [theaterState, setTheaterState] = useState(DeafultState);

    const setTheater = (theater) => {
        setTheaterState((prev) => ({ ...prev, theater }));
    };

    const setSchedule = (schedule) => {
        setTheaterState((prev) => ({ ...prev, schedule }));
    };

    const selectSeat = (seat) => {
        setTheaterState((prev) => ({
            ...prev,
            selectedSeats: [...prev.selectedSeats, seat],
        }));
    };

    const deselectSeat = (seat) => {
        setTheaterState((prev) => ({
            ...prev,
            selectedSeats: prev.selectedSeats.filter(
                (selectedSeat) => selectedSeat.seatId !== seat.seatId,
            ),
        }));
    };

    const setSeatsOccupied = (seatsOccupied) => {
        setTheaterState((prev) => ({ ...prev, seatsOccupied }));
    };

    const isSeatOccupied = (seat) => {
        return containsInSeatingSet(seat, theaterState.seatsOccupied);
    };

    const isSeatSelected = (seat) => {
        return containsInSeatingSet(seat, theaterState.selectedSeats);
    };

    const getSeatState = (seat) => {
        if (isSeatOccupied(seat)) {
            return SeatState.occupied;
        }

        if (isSeatSelected(seat)) {
            return SeatState.selected;
        }

        return SeatState.free;
    };

    const getTotalPrice = () => {
        if (!theaterState.schedule || !theaterState.schedule.price) {
            return 0;
        }

        return theaterState.schedule.price * theaterState.selectedSeats.length;
    };

    const values = {
        theaterState,
        schedule: theaterState.schedule,
        theater: theaterState.theater,
        selectedSeats: theaterState.selectedSeats,
        seatsOccupied: theaterState.seatsOccupied,
        setSeatsOccupied,
        setTheater,
        setSchedule,
        setTheaterState,
        selectSeat,
        deselectSeat,
        getSeatState,
        getTotalPrice
    };

    return (
        <TheaterContext.Provider value={values}>
            {children}
        </TheaterContext.Provider>
    );
};

export default TheaterProvider;

function containsInSeatingSet(seat, seatingSet) {
    return seatingSet.reduce(
        (acc, seatOccupied) => acc || seatOccupied.seatId === seat.seatId,
        false,
    );
}
