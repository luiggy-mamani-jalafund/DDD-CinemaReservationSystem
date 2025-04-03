import React from 'react';

const MovieSchedule = ({ showtimes = [], selectedDay, selectedSchedule, handleDayClick, handleScheduleClick }) => (
    <div className="movieSchedule">
        <h2 className="secondary primary-font">Days</h2>
        <div className="days">
            {Array.isArray(showtimes) && showtimes.length > 0 ? (
                showtimes.map((schedule, index) => {
                    if (!schedule || !schedule.Date) return null;
                    
                    try {
                        const date = new Date(schedule.Date);
                        if (isNaN(date.getTime())) {
                            console.error("Fecha inválida:", schedule.Date);
                            return null;
                        }
                        
                        const day = date.getDate().toString().padStart(2, '0');
                        
                        return (
                            <div
                                key={index}
                                className={`day ${selectedDay === day ? 'selected' : ''}`}
                                onClick={() => handleDayClick(day)}
                            >
                                {day}
                            </div>
                        );
                    } catch (e) {
                        console.error("Error procesando fecha:", e);
                        return null;
                    }
                })
            ) : (
                <p>There are no days available.</p>
            )}
        </div>

        <h2 className="secondary primary-font">Schedules</h2>
        <div className="schedules">
            {Array.isArray(showtimes) && showtimes.length > 0 ? (
                showtimes.flatMap((schedule) => {
                    if (!schedule || !schedule.Date || !Array.isArray(schedule.Hours)) {
                        return [];
                    }
                    
                    try {
                        const date = new Date(schedule.Date);
                        if (isNaN(date.getTime())) return [];
                        
                        const day = date.getDate().toString().padStart(2, '0');
                        
                        return schedule.Hours.map((hour, index) => {
                            return selectedDay === day ? (
                                <div
                                    key={index}
                                    className={`scheduleTime ${selectedSchedule === hour.Showtime ? 'selected' : ''}`}
                                    onClick={() => handleScheduleClick(hour)}
                                >
                                    {hour.Showtime} - {hour.Price} Bs.
                                </div>
                            ) : null;
                        });
                    } catch (e) {
                        console.error("Error procesando horarios:", e);
                        return [];
                    }
                })
            ) : (
                <p>There are no available times.</p>
            )}
        </div>
    </div>
);

export default MovieSchedule;