import Link from "next/link";
import MovieCard from "./MovieCard";

const MovieCardWithRedirection = ({ movie }) => {
    const MOVIE_LINK = "/movies/".concat(movie._id) ?? "/movies";

    return (
        <Link href={MOVIE_LINK} className="movie-card-redirector">
            <MovieCard movie={movie} />
        </Link>
    );
};

export default MovieCardWithRedirection;
