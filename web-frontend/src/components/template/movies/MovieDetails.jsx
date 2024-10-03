"use client";

import React, { useEffect, useState } from 'react';
import MoviePoster from '@/components/molecules/movies/MoviePoster';
import MovieInfo from '@/components/molecules/movies/MovieInfo';
import MovieSchedule from '@/components/molecules/movies/MovieSchedule';

const MovieDetails = ({ movie, showtimes }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    useEffect(() => {
        if (showtimes && showtimes.length > 0) {
            const firstDay = new Date(showtimes[0].date).toLocaleDateString("es-ES", {
                day: '2-digit'
            });
            setSelectedDay(firstDay);
            setSelectedSchedule(showtimes[0].hours[0].showtime);
        }
    }, [showtimes]);

    const handleDayClick = (day) => {
        setSelectedDay(prevDay => (prevDay === day ? null : day));
        const newSchedule = showtimes.find(schedule => 
            new Date(schedule.date).toLocaleDateString("es-ES", { day: '2-digit' }) === day
        );
        if (newSchedule) {
            setSelectedSchedule(newSchedule.hours[0].showtime);
        }
    };

    const handleScheduleClick = (hour) => {
        setSelectedSchedule(prevHour => (prevHour === hour ? null : hour));
    };

    return (
        <section className="movieDetails">
            <div
                className="backgroundImageContainer"
                style={{ backgroundImage: `url(${movie.image})` }}
            />
            <div className="contentContainer">
                <MoviePoster image={movie.image} title={movie.title} />
                <MovieInfo title={movie.title} description={movie.description} />
                <MovieSchedule 
                    showtimes={showtimes} 
                    selectedDay={selectedDay} 
                    selectedSchedule={selectedSchedule}
                    handleDayClick={handleDayClick}
                    handleScheduleClick={handleScheduleClick}
                />
                <button className="continueButton">Continue</button>
            </div>
        </section>
    );
};

export default MovieDetails;
