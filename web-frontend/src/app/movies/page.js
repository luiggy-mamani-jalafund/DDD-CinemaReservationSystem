import MovieBillboard from "@/components/template/movies/MovieBillboard";
import { fetchAvailableMovies } from "@/utils/data_fetchers/MoviesFetcher";

export default async function MoviesPage() {
    const availableMovies = await fetchAvailableMovies();

    return <MovieBillboard movies={availableMovies} />;
}
