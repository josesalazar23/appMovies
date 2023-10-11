import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MainNewContent = () => {
  // peliculas de cada categoría desde el estado
  const popularMovies = useSelector(
    (state) => state.user.mainNewContentData.popularMovies
  );
  const newMovies = useSelector(
    (state) => state.user.mainNewContentData.newMovies
  );
  const familyMovies = useSelector(
    (state) => state.user.mainNewContentData.familyMovies
  );
  const mangaMovies = useSelector(
    (state) => state.user.mainNewContentData.mangaMovies
  );


  return (
    <>
      <div>
        <div>
          <h4 className="pageTitle">New Most Popular Movies</h4>
          <div className="grid">
            {popularMovies.length > 0 &&
              popularMovies.map((popularMovie) => (
                <MovieCard key={popularMovie.id} movie={popularMovie} />
              ))}
          </div>
        </div>

        <div>
          <h4 className="pageTitle">All Time Favorites</h4>
          <div className="grid">
            {newMovies.length > 0 &&
              newMovies.map((newMovie) => (
                <MovieCard key={newMovie.id} movie={newMovie} />
              ))}
          </div>
        </div>

        <div>
          <h4 className="pageTitle">Documentaries</h4>
          <div className="grid">
            {familyMovies.length > 0 &&
              familyMovies.map((familyMovie) => (
                <MovieCard key={familyMovie.id} movie={familyMovie} />
              ))}
          </div>
        </div>

        <div>
          <h4 className="pageTitle">Animated Films</h4>
          <div className="grid">
            {mangaMovies.length > 0 &&
              mangaMovies.map((mangaMovie) => (
                <MovieCard key={mangaMovie.id} movie={mangaMovie} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNewContent;