import React from 'react';

const MovieSchedule = ({ showtimes, selectedDay, selectedSchedule, handleDayClick, handleScheduleClick }) => (
    <div className="movieSchedule">
        <h2 className="secondary primary-font">Days</h2>
        <div className="days">
            {showtimes && showtimes.length > 0 ? (
                showtimes.map((schedule, index) => {
                    const day = new Date(schedule.date).toLocaleDateString("es-ES", { day: '2-digit' });
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

        <h2 className="secondary primary-font">Schedules</h2>
        <div className="schedules">
            {showtimes && showtimes.length > 0 ? (
                showtimes.flatMap((schedule) =>
                    schedule.hours.map((hour, index) => {
                        const day = new Date(schedule.date).toLocaleDateString("es-ES", { day: '2-digit' });
                        return selectedDay === day ? (
                            <div
                                key={index}
                                className={`scheduleTime ${selectedSchedule === hour.showtime ? 'selected' : ''}`}
                                onClick={() => handleScheduleClick(hour)}
                            >
                                {hour.showtime} - {hour.price} Bs.
                            </div>
                        ) : null;
                    })
                )
            ) : (
                <p>There are no available times.</p>
            )}
        </div>
    </div>
);

export default MovieSchedule;
