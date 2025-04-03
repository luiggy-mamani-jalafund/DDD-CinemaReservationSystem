"use client";

import React, { useEffect, useState } from "react";
import MoviePoster from "@/components/molecules/movies/MoviePoster";
import MovieInfo from "@/components/molecules/movies/MovieInfo";
import MovieSchedule from "@/components/molecules/movies/MovieSchedule";
import Link from "next/link";
import {
    fetchSingleMovie,
    fetchMovieShowtimes,
} from "@/utils/data_fetchers/MoviesFetcher";
import { useRouter } from "next/navigation";

const MovieDetails = ({ movieId }) => {
    const router = useRouter();
    const [movie, setMovie] = useState(null);
    const [showtimes, setShowTime] = useState(null);

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [selectedScheduleObj, setSelectedScheduleObj] = useState(null);

    useEffect(() => {
        fetchSingleMovie(movieId)
            .then((res) => setMovie(res))
            .catch(() => {
                router.back();
            });
    }, []);

    useEffect(() => {
        fetchMovieShowtimes(movieId)
            .then((res) => setShowTime(res))
            .catch(() => {
                router.back();
            });
    }, []);

    useEffect(() => {
        console.log("Showtimes recibido:", JSON.stringify(showtimes));
        
        if (showtimes && Array.isArray(showtimes) && showtimes.length > 0) {
            if (showtimes[0].Date) {
                try {
                    const dateStr = showtimes[0].Date;
                    const date = new Date(dateStr);
                    
                    if (!isNaN(date.getTime())) {
                        const day = date.getDate().toString().padStart(2, '0');
                        setSelectedDay(day);
                        
                        if (showtimes[0].Hours && showtimes[0].Hours.length > 0) {
                            setSelectedSchedule(showtimes[0].Hours[0].Showtime);
                            setSelectedScheduleObj(showtimes[0].Hours[0]);
                        }
                    }
                } catch (e) {
                    console.error("Error procesando fecha:", e);
                }
            }
        }
    }, [showtimes]);
    
    const handleDayClick = (day) => {
        setSelectedDay(day);
        
        if (!Array.isArray(showtimes)) return;
        
        const selectedSchedule = showtimes.find(schedule => {
            if (schedule.Date) {
                const scheduleDate = new Date(schedule.Date);
                const scheduleDay = scheduleDate.getDate().toString().padStart(2, '0');
                return scheduleDay === day;
            }
            return false;
        });
        
        if (selectedSchedule && selectedSchedule.Hours && selectedSchedule.Hours.length > 0) {
            setSelectedSchedule(selectedSchedule.Hours[0].Showtime);
            setSelectedScheduleObj(selectedSchedule.Hours[0]);
        } else {
            setSelectedSchedule(null);
            setSelectedScheduleObj(null);
        }
    };

    const handleScheduleClick = (hourObj) => {
        setSelectedScheduleObj((prev) =>
            prev?.id === hourObj.id ? null : hourObj,
        );
        setSelectedSchedule((prevHour) =>
            prevHour === hourObj.showtime ? null : hourObj.showtime,
        );
    };

    if (!movie || !showtimes) {
        return <div>loading...</div>;
    }

    return (
        <section className="movieDetails">
            <div
                className="backgroundImageContainer"
                style={{ backgroundImage: `url(${movie.image})` }}
            />
            <div className="contentContainer">
                <MoviePoster image={movie.image} title={movie.title} />
                <MovieInfo
                    title={movie.title}
                    description={movie.description}
                />
                <MovieSchedule
                    showtimes={showtimes}
                    selectedDay={selectedDay}
                    selectedSchedule={selectedSchedule}
                    handleDayClick={handleDayClick}
                    handleScheduleClick={handleScheduleClick}
                />

                {selectedDay && selectedSchedule && (
                    <Link
                        className="continueButton"
                        href={`/movies/${movie.id}/theater/${selectedScheduleObj.id}`}
                    >
                        Continue
                    </Link>
                )}
            </div>
        </section>
    );
};

export default MovieDetails;
