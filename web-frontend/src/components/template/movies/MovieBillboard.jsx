"use client"
import MoviesRenderer from "../../organisms/movies/MoviesRenderer";
import "@/styles/layout/_wrapper.scss"
import "@/styles/layout/_movies_layout.scss"
import { useState, useEffect } from "react";
import { fetchAvailableMovies } from "@/utils/data_fetchers/MoviesFetcher";


const MovieBillboard = () => {
    const [movies, setMovies] = useState(undefined)

    useEffect(() => {
    fetchAvailableMovies().then(res => setMovies(res)).catch((e) => setMovies([]))

    }, [])

    if (!movies) {
        return <div>loading...</div>
    }

    return (
        <main className="wrapper | movie-billboard-wrapper">
            <h1 className="text | big">Movie Billboard</h1>
            <MoviesRenderer movies={movies} />
        </main>
    );
};

export default MovieBillboard;
