import { useEffect, useState } from "react";
import axios from "axios";

const MovieTypes = ({
  setMovies,
  page, 
  showSelectType,
  setShowSelectType,
  showMovieType,
  setShowMovieType,
  setPage,
  setCurrentPage,
  url,
  setContentLength,
  setTitle,
}) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movieName, setMovieName] = useState("");
  const error = "no results found.";

  useEffect(() => {
    const findMovie = async () => {
      if (showSelectType) {
        return;
      }
      if (showMovieType) {
        try {
          const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/${url}?api_key=${apiKey}&query=${movieName}&page=${page}`
          );

          const filteredMovies = response.data.results.filter(movie => movie.poster_path !== null);
          
          if (response.data.results.length === 0) {
            setTitle(error);
          }
          
          setMovies(filteredMovies);
          setContentLength(filteredMovies.length);
        } catch (error) {
          console.log(error);
        }
      }
    };

    findMovie();
  }, [showSelectType, movieName, page, setMovies, setContentLength, setTitle]);

  const handleFindMovie = (e) => {
    e.preventDefault();
    if (!searchMovie.trim()) {
      return;
    }
    setTitle(`Search results "${searchMovie}"`);
    setShowSelectType(false);
    setShowMovieType(true);
    setMovieName(searchMovie);
    setSearchMovie("");
  };

  const handleChangeSearch = (e) => {
    setSearchMovie(e.target.value);
    setPage(1);
    setCurrentPage(1);
  };

  return (
    <>
      <div>
        <form className="search-container padding-title">
          <div className="search-content">
            <input
              type="text"
              value={searchMovie}
              onChange={handleChangeSearch}
              className="search-input"
            /> 
            <button 
              onClick={handleFindMovie} 
              className="search-button"
              disabled={!searchMovie.trim()}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MovieTypes;