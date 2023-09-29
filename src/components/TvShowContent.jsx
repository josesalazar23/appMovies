import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import ModalMovie from "./ModalMovie";
import MovieTypes from "./MovieTypes";
import { setContentLength, setTitle } from "../reducers/user/userSlice";

const TvShowContent = () => {
  const [tvShow, setTvShow] = useState([]);
  const [showMovieType, setShowMovieType] = useState(false);
  const [showSelectType, setShowSelectType] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieDate, setMovieDate] = useState([]);

  const dispatch = useDispatch();
  const page = useSelector((state) => state.user.page);
  const title = useSelector((state) => state.user.title);

  if (!tvShow) {
    dispatch(setTitle("no results found"));
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 20, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (showSelectType || showMovieType) {
        return;
      }
      dispatch(setTitle("New Tv Shows Added"));
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`
        );
        const filteredTvShows = response.data.results.filter(
          (tvShow) => tvShow.poster_path !== null
        );
        setTvShow(filteredTvShows);
        dispatch(setContentLength(filteredTvShows.length));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page]);

  const handleMovieClick = (tvShow) => {
    setMovieTitle(tvShow.name);
    setMovieImg(tvShow.poster_path);
    setMovieInfo(tvShow.overview);
    setMovieDate(tvShow.first_air_date);
    setModalShow(true);
  };

  if (page) {
    scrollToTop();
  }

  return (
    <div>
      <div>
        <MovieTypes
          setMovies={setTvShow}
          page={page}
          showSelectType={showSelectType}
          setShowSelectType={setShowSelectType}
          showMovieType={showMovieType}
          setShowMovieType={setShowMovieType}
        />
      </div>
      <div>
        <ModalMovie
          modalShow={modalShow}
          onHide={() => setModalShow(false)}
          movieTitle={movieTitle}
          movieImg={movieImg}
          movieInfo={movieInfo}
          movieDate={movieDate}
          setModalShow={setModalShow}
        />
      </div>
      <h4 className="pageTitle">{title}</h4>
      <div className="grid">
        {tvShow.map((tvShow) => (
          <MovieCard
            key={tvShow.id}
            movie={tvShow}
            onClick={() => handleMovieClick(tvShow)}
          />
        ))}
      </div>
    </div>
  );
};

export default TvShowContent;