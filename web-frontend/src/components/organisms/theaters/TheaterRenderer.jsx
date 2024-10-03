"use client";
import { useEffect, useContext } from "react";
import { TheaterContext } from "@/contexts/TheaterContext";
import {
    getTheaterById,
    getSeatsOccupied,
} from "@/utils/data_fetchers/TheaterFetcher";
import { useRouter } from "next/navigation";
import SeatingSetRenderer from "./SeatingSetRenderer";

const TheaterRenderer = ({ theaterId }) => {
    const router = useRouter();
    const { theater, setTheater, setSeatsOccupied } =
        useContext(TheaterContext);

    useEffect(() => {
        getTheaterById(theaterId)
            .then((theaterFetched) => {
                setTheater(theaterFetched);
            })
            .catch((_) => {
                router.back();
            });
    }, [theaterId]);

    useEffect(() => {
        if (theater) {
            // TODO: fetch schedule from context, query, fetching, etc
            getSeatsOccupied(undefined, theater)
                .then((seatsOccupied) => {
                    setSeatsOccupied(seatsOccupied);
                })
                .catch((_) => {
                    router.back();
                });
        }
    }, [theater]);

    if (!theater) {
        return <span>loading...</span>;
    }

    return (
        theater.seatingSet && (
            <article className="theater-wrapper">
                {theater.seatingSet.map((seatSection, i) => (
                    <SeatingSetRenderer
                        seatingSet={seatSection}
                        key={`seating-set-${i}`}
                    />
                ))}
            </article>
        )
    );
};

export default TheaterRenderer;
