export async function fetchSingleMovie(movieId) {
    const response = await fetch(`http://localhost:5011/api/Movie/${movieId}`);
    const movie = await response.json();

    return movie;
}

export async function fetchAvailableMovies() {
    try {
        const response = await fetch("http://localhost:5011/api/Movie/active");
        const movies = await response.json();

        return movies;
    } catch (e) {
        console.log(e);

        return [];
    }
}

export async function fetchMovieShowtimes(movieId) {
    console.log(`http://localhost:5011/api/Showtime/${movieId}`);
    
    const response = await fetch(
        `http://localhost:5011/api/Showtime/${movieId}`,
    );
    const showtimes = await response.json();
    
    return showtimes;
}
