import MovieCard from "./MovieCard";
import { useFetchPopularMovies, useFetchNewMovies, useFetchFamilyMovies, useFetchMangaMovies } from "./helpers/useAxiosApi";

const MainNewContent = () => {
    const popularMovies = useFetchPopularMovies();
    const newMovies = useFetchNewMovies();
    const familyMovies = useFetchFamilyMovies();
    const mangaMovies = useFetchMangaMovies();

    return (
        <>
            <div>
                <div>
                    <h4 className="pageTitle">New Most Popular Movies</h4>
                    <div className="grid">
                        {popularMovies.map((popularMovie) => (
                        <MovieCard key={popularMovie.id} movie={popularMovie}/>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="pageTitle">of all times</h4>
                    <div className="grid">
                        {newMovies.map((newMovie) => (
                        <MovieCard key={newMovie.id} movie={newMovie}/>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="pageTitle">documentaries</h4>
                    <div className="grid">
                        {familyMovies.map((familyMovies) => (
                        <MovieCard key={familyMovies.id} movie={familyMovies}/>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="pageTitle">animated films</h4>
                    <div className="grid">
                        {mangaMovies.map((mangaMovies) => (
                        <MovieCard key={mangaMovies.id} movie={mangaMovies}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainNewContent;
