import MoviesRenderer from "../../organisms/movies/MoviesRenderer";
import "@/styles/layout/_wrapper.scss"
import "@/styles/layout/_movies_layout.scss"

const MovieBillboard = ({ movies }) => {
    return (
        <main className="wrapper | movie-billboard-wrapper">
            <h1 className="text | big">Movie Billboard</h1>
            <MoviesRenderer movies={movies} />
        </main>
    );
};

export default MovieBillboard;
