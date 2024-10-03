"use client";
import { useEffect, useContext } from "react";
import { TheaterContext } from "@/contexts/TheaterContext";
import { getTheaterById } from "@/utils/data_fetchers/TheaterFetcher";
import { useRouter } from "next/navigation";
import SeatingSetRenderer from "./SeatingSetRenderer";

const TheaterRenderer = ({ theaterId }) => {
    const router = useRouter();
    const { theater, setTheater } = useContext(TheaterContext);

    useEffect(() => {
        getTheaterById(theaterId)
            .then((theaterFetched) => {
                setTheater(theaterFetched);
            })
            .catch((_) => {
                router.back();
            });
    }, []);

    useEffect(() => {
        if (theater) {
            // TODO: fetch occupied state
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
