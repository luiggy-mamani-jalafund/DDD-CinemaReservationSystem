import MovieDetails from "@/components/template/movies/MovieDetails";
import { fetchSingleMovie, fetchMovieShowtimes } from "@/utils/data_fetchers/MoviesFetcher";

export default async function MoviePage({ params }) {
    const movie = await fetchSingleMovie(params.id);
    const showtimes = await fetchMovieShowtimes(params.id);

    return (
        <div>
            <MovieDetails movie={movie} showtimes={showtimes} />
        </div>
    );
}
