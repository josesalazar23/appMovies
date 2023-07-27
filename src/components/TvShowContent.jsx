import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import ModalMovie from "./ModalMovie";
import MovieTypes from "./MovieTypes";

const TvShowContent = ({page, setPage, setContentLength, setCurrentPage, url, setUrl, title, setTitle}) => {
    const [tvShow, setTvShow] = useState([]);
    const [showMovieType, setShowMovieType] = useState(false);
    const [showSelectType, setShowSelectType] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [movieTitle, setMovieTitle] = useState([]);
    const [movieImg, setMovieImg] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [movieDate, setMovieDate] = useState([]);
    const isFirstRender = true;

    if(!tvShow) {
        setTitle("no results found");
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 20, behavior: "smooth" });
    };

    useEffect(() => {
        const fetchData = async () => {
            if(showSelectType || showMovieType ) {
                return;
            }
            setUrl("tv");
          try {
            const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
            const response = await axios.get(
              `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`
            );
            const filteredMovies = response.data.results.filter(movie => movie.poster_path !== null);
            setTitle("New Tv Shows Added");
            setTvShow(filteredMovies);
            setContentLength(filteredMovies.length);
            
            if (isFirstRender) {
                setContentLength(20);
            }

          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    }, [page, setTvShow]);
    
    const handleMovieClick = (movie) => {
        setMovieTitle(movie.name);
        setMovieImg(movie.poster_path);
        setMovieInfo(movie.overview);
        setMovieDate(movie.first_air_date);
        setModalShow(true);
    }

    if(page) {
        scrollToTop()
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
                    setPage={setPage}
                    setCurrentPage={setCurrentPage}
                    url={url}
                    setContentLength={setContentLength}
                    setTitle={setTitle}
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
    )
}

export default TvShowContent;