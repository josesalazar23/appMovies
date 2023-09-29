import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MainPopularContent = () => {

    const showPopularMovie = useSelector(
        (state) => state.user.mainNewContentData.popularMovies
    );

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % showPopularMovie.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, [showPopularMovie]);

    return (
        <div className="mainPage">
            {showPopularMovie.length > 0 && (
                <div className="mainPage__content">
                    <img
                        className="mainPage__imgMovie"
                        src={`https://image.tmdb.org/t/p/w500/${showPopularMovie[currentIndex].poster_path}`}
                        alt={showPopularMovie[currentIndex].title}
                    />
                    <div className="mainPage__textContent">
                        <h4 className="mainPage__textMovie">{showPopularMovie[currentIndex].overview}</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPopularContent;







