import MovieDetails from "@/components/template/movies/MovieDetails";

export default async function MoviePage({ params }) {
    return (
        <div>
            <MovieDetails movieId={params.id} />
        </div>
    );
}
