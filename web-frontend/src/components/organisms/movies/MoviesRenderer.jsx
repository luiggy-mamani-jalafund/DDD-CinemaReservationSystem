import MovieCard from "@/components/molecules/movies/MovieCard";
import "@/styles/layout/_movies_layout.scss"

const MoviesRenderer = ({ movies }) => {
    return (
        <article className="movies-wrapper">
            {movies.map((movie, i) => (
                <MovieCard movie={movie} key={`movie-card-${i}`} />
            ))}
        </article>
    );
};

export default MoviesRenderer;
