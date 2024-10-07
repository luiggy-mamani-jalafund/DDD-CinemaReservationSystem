import "@/styles/other/_movie.scss";

const MovieCard = ({ movie }) => {
    return (
        <section className="movie-card">
            <h3 className="movie-card-title">{movie.title}</h3>
            <div className="movie-card-image-wrapper">
                <img
                    className="movie-card-image"
                    src={movie.image}
                    alt={`movie image - ${movie.title}`}
                />
            </div>
        </section>
    );
};

export default MovieCard;
