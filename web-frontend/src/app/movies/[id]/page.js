import MovieDetails from "@/components/template/movies/MovieDetails";
import { fetchSingleMovie } from "@/utils/data_fetchers/MoviesFetcher";

export default async function MoviePage({ params }) {
    const movie = await fetchSingleMovie(params.id);

    return <MovieDetails movie={movie} />;
}
