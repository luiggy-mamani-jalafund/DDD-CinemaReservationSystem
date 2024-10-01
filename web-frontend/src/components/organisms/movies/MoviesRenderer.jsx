import MovieCardWithRedirection from "@/components/molecules/movies/MovieCardWithRedirection";
import "@/styles/layout/_movies_layout.scss";

const MoviesRenderer = ({ movies }) => {
    return (
        <article className="movies-wrapper">
            {movies.map((movie, i) => (
                <MovieCardWithRedirection
                    movie={movie}
                    key={`movie-card-${i}`}
                />
            ))}
        </article>
    );
};

export default MoviesRenderer;
