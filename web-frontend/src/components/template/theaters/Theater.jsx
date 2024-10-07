"use client";

import TypesSeatState from "@/components/molecules/theaters/TypesSeatState";
import PurchaseForm from "@/components/organisms/purchases/PurchaseForm";
import TheaterRenderer from "@/components/organisms/theaters/TheaterRenderer";
import { TheaterContext } from "@/contexts/TheaterContext";
import "@/styles/layout/_theater_layout.scss";
import "@/styles/other/_theater_items.scss";
import { fetchMovieShowtimes } from "@/utils/data_fetchers/MoviesFetcher";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useContext } from "react";

const Theater = ({ movieId, hourId }) => {
    const router = useRouter();
    const { schedule, setSchedule } = useContext(TheaterContext);

    useEffect(() => {
        fetchMovieShowtimes(movieId)
            .then((res) => {
                for (let i = 0; i < res.length; i++) {
                    for (let j = 0; j < res[i].hours.length; j++) {
                        if (res[i].hours[j].id === hourId) {
                            setSchedule(res[i].hours[j]);
                        }
                    }
                }
            })
            .catch((exception) => {
                router.back();
            });
    }, [movieId, hourId]);

    if (!schedule) return <p>Loading...</p>;

    return (
        <main className="main-theater-wrapper">
            <div className="theater-screen"></div>
            <div className="theater-screen-text">screen</div>
            <TheaterRenderer theaterId={schedule.theaterId} />
            <TypesSeatState />
            <PurchaseForm />
        </main>
    );
};

export default Theater;
