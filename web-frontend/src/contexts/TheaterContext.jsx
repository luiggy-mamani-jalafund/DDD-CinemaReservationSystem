"use client";
import { createContext, useState } from "react";

export const TheaterContext = createContext();

const DeafultState = {
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

    const selectSeat = (seat) => {
        setTheaterState((prev) => ({
            ...prev,
            seatsOccupied: [...prev.seatsOccupied, seat],
        }));
    };

    const deselectSeat = (seat) => {
        setTheaterState((prev) => ({
            ...prev,
            seatsOccupied: prev.seatsOccupied.filter(
                (selectedSeat) => selectedSeat.seatId !== seat.seatId,
            ),
        }));
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

    const values = {
        theaterState,
        theater: theaterState.theater,
        selectedSeats: theaterState.selectedSeats,
        seatsOccupied: theaterState.seatsOccupied,
        setTheater,
        setTheaterState,
        selectSeat,
        deselectSeat,
        getSeatState,
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
