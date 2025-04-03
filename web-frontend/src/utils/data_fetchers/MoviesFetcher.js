export async function fetchSingleMovie(movieId) {
    const response = await fetch(`http://localhost:5121/api/Movie/${movieId}`);
    const movie = await response.json();

    return movie;
}

export async function fetchAvailableMovies() {
    try {
        const response = await fetch("http://localhost:5121/api/Movie/active");
        const movies = await response.json();

        return movies;
    } catch (e) {
        return [];
    }
}

export async function fetchMovieShowtimes(movieId) {    
    const response = await fetch(
        `http://localhost:5121/api/Showtime/movie/${movieId}`,
    );
    const showtimes = await response.json();
    
    return showtimes;
}
