import MovieCard from "./MovieCard";
import SelectType from "./SelectType";
import MovieTypes from "./MovieTypes";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalMovie from "./ModalMovie";
import { setPage, setContentLength, setCurrentPage, setUrl, setTitle } from "../reducers/user/userSlice";

const MovieContent = () => {
  const [showMovieType, setShowMovieType] = useState(false);
  const [showSelectType, setShowSelectType] = useState(false);
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieDate, setMovieDate] = useState([]);

  const dispatch = useDispatch();
  const page = useSelector((state) => state.user.page);
  const title = useSelector((state) => state.user.title);

  if(!movies) {
    dispatch(setTitle("no se encontraron resultados"));
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 20, behavior: "smooth" });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      if (showSelectType || showMovieType) {
        return;
      }
      dispatch(setUrl("movie"));
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
        );
        const filteredMovies = response.data.results.filter(movie => movie.poster_path !== null);
        dispatch(setTitle("New Movies Added"));
        setMovies(filteredMovies);
        dispatch(setContentLength(filteredMovies.length));

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
          // url={url}
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
