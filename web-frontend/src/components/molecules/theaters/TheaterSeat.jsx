"use client";
import { useContext } from "react";
import { TheaterContext } from "@/contexts/TheaterContext";

const TheaterSeat = ({ seat }) => {
    const { selectSeat, deselectSeat, getSeatState } =
        useContext(TheaterContext);
    const SEAT_STATE = getSeatState(seat);

    const handleClick = () => {
        if (SEAT_STATE === "occupied") {
            return;
        }

        if (SEAT_STATE === "selected") {
            selectSeat(seat);
        } else {
            deselectSeat(seat);
        }
    };

    return (
        <button
            className="seat"
            data-state={SEAT_STATE}
            onClick={handleClick}
        ></button>
    );
};

export default TheaterSeat;
