export async function fetchSingleMovie(movieId) {
    return {
        _id: "somemovieid",
        title: "Inception",
        description:
            "A thief who steals secrets from dreams is offered the chance to erase his past as payment for a job he must do.",
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
        duration: 148,
        genre: "Science Fiction",
        isActive: true,
    };
}

export async function fetchAvailableMovies() {
    const response = await fetch("http://localhost:5011/api/Movie/active");
    const movies = await response.json();
    
    return movies
}
