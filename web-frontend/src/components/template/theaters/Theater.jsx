"use client";

import TypesSeatState from "@/components/molecules/theaters/TypesSeatState";
import PurchaseForm from "@/components/organisms/purchases/PurchaseForm";
import TheaterRenderer from "@/components/organisms/theaters/TheaterRenderer";
import { TheaterContext } from "@/contexts/TheaterContext";
import "@/styles/layout/_theater_layout.scss";
import "@/styles/other/_theater_items.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useContext } from "react";

const Theater = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { schedule, setSchedule } = useContext(TheaterContext);

    useEffect(() => {
        const scheduleParam = searchParams.get("schedule");

        if (scheduleParam) {
            try {
                // const decodedSchedule = decodeURIComponent(scheduleParam);
                const parsedSchedule = JSON.parse(scheduleParam);
                setSchedule(parsedSchedule);
            } catch (_) {
                router.back();
            }
        }
    }, [searchParams]);

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
