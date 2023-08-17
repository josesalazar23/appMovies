import MovieCard from "./MovieCard";
import SelectType from "./SelectType";
import MovieTypes from "./MovieTypes";
import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import ModalMovie from "./ModalMovie";
import { UserContext } from "./AppMovies";

const MovieContent = () => {
  const [showMovieType, setShowMovieType] = useState(false);
  const [showSelectType, setShowSelectType] = useState(false);
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieDate, setMovieDate] = useState([]);
  // const isFirstRender = true;

  const {page, setPage, setContentLength, setCurrentPage, url, setUrl, title, setTitle} = useContext(UserContext);

  if(!movies) {
    setTitle("no se encontraron resultados");
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 20, behavior: "smooth" });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      if (showSelectType || showMovieType) {
        return;
      }
      setUrl("movie")
      try {
        const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
        );
        const filteredMovies = response.data.results.filter(movie => movie.poster_path !== null);
        setTitle("New Movies Added");
        setMovies(filteredMovies);
        setContentLength(filteredMovies.length);

        // if (isFirstRender) {
        //   setContentLength(20);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

  }, [page, setMovies]);

  const handleMovieClick = (movie) => {
    setMovieTitle(movie.title);
    setMovieImg(movie.poster_path);
    setMovieInfo(movie.overview)
    setMovieDate(movie.release_date);
    setModalShow(true);
  }

  if(page) {
    scrollToTop()
  }

  return (
    <>
    <div>
        <MovieTypes
          setMovies={setMovies}
          page={page}
          showSelectType={showSelectType}
          setShowSelectType={setShowSelectType}
          showMovieType={showMovieType}
          setShowMovieType={setShowMovieType}
          setPage={setPage}
          setCurrentPage={setCurrentPage}
          url={url}
          setContentLength={setContentLength}
          setTitle={setTitle}
        />
    </div>
    
    <div>
        <SelectType 
          setMovies={setMovies}
          page={page}
          setPage={setPage}
          setContentLength={setContentLength}
          setCurrentPage={setCurrentPage}
          setShowSelectType={setShowSelectType}
          setShowMovieType={setShowMovieType}
          showMovieType={showMovieType}
          setTitle={setTitle}
        />
    </div>
    
    <div>
      <div>
        <ModalMovie
          modalShow={modalShow}
          onHide={() => setModalShow(false)}
          movieTitle={movieTitle}
          movieImg={movieImg}
          movieInfo={movieInfo}
          setModalShow={setModalShow}
          movieDate={movieDate}
        />
      </div>
      <h4 className="pageTitle">{title}</h4>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default MovieContent;
