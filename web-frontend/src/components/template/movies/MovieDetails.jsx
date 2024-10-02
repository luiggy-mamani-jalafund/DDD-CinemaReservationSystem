"use client";

import React, { useEffect, useState } from 'react';

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
        <section className="movie-details">
            <div
                className="background-image-container"
                style={{
                    backgroundImage: `url(${movie.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="content-container">
                <div className="movie-poster">
                    <img src={movie.image} alt={`Poster de ${movie.title}`} />
                </div>
                <div className="movie-info">
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="movie-description">{movie.description}</p>

                    <div className="movie-schedule">
                        <h3>Días</h3>
                        <div className="days">
                            {showtimes && showtimes.length > 0 ? (
                                showtimes.map((schedule, index) => {
                                    const day = new Date(schedule.date).toLocaleDateString("es-ES", {
                                        day: '2-digit'
                                    });
                                    return (
                                        <div
                                            key={index}
                                            className={`day ${selectedDay === day ? 'selected' : ''}`}
                                            onClick={() => handleDayClick(day)}
                                        >
                                            {day}
                                        </div>
                                    );
                                })
                            ) : (
                                <p>There are no days available.</p>
                            )}
                        </div>

                        <h3>Horarios</h3>
                        <div className="schedules">
                            {showtimes && showtimes.length > 0 ? (
                                showtimes.flatMap(schedule =>
                                    schedule.hours.map((hour, index) => {
                                        const day = new Date(schedule.date).toLocaleDateString("es-ES", { day: '2-digit' });
                                        return selectedDay === day ? (
                                            <div
                                                key={index}
                                                className={`schedule-time ${selectedSchedule === hour.showtime ? 'selected' : ''}`}
                                                onClick={() => handleScheduleClick(hour.showtime)}
                                            >
                                                {hour.showtime}
                                                {" - " + hour.price + " Bs."}
                                            </div>
                                        ) : null;
                                    })
                                )
                            ) : (
                                <p>There are no available times.</p>
                            )}
                        </div>
                    </div>

                    <button className="continue-button">Continue</button>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;
