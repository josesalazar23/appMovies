import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import starAverage from "../assets/icons/starAverage.svg";

const MovieCard = ({ movie, onClick }) => {
    const location = useLocation();
    const [movieTitle, setMovieTitle] = useState([]);
    const [movieImg, setMovieImg] = useState([]);
    const [Average, setAverage] = useState([]);
  
    const handleMovieClick = () => {
      if (typeof onClick === "function") {
        onClick(movie);
      }
    };
  
    useEffect(() => {
      if (location.pathname === "/TvShowContent") {
        setMovieTitle(movie.original_name);
      } else {
        setMovieTitle(movie.title);
      }
      setMovieImg(movie.poster_path);
      setAverage(movie.vote_average);
    }, [movie]);
  
    return (
      <div className="movieCard" onClick={handleMovieClick}>
        <img src={`https://image.tmdb.org/t/p/w500/${movieImg}`} alt={movieTitle}/>
        <h3 className="movieCard__text">{Average}<img src={starAverage} alt="Estrella promedio" /></h3>
      </div>
    );
  };
  
  export default MovieCard;