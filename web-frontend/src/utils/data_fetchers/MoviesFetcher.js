export async function fetchSingleMovie(movieId) {
    const response = await fetch(
        `http://localhost:5011/api/Movie/${movieId}`,
    );
    const movie = await response.json();

    return movie;
}

export async function fetchAvailableMovies() {
    const response = await fetch("http://localhost:5011/api/Movies/active");
    const movies = await response.json();

    return movies;
}

export async function fetchMovieShowtimes(movieId) {
    const response = await fetch(
        `http://localhost:5011/api/Showtime/${movieId}`,
    );
    const showtimes = await response.json();

    return showtimes;
}