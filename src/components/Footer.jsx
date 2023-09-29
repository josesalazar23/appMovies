import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { UserContext } from "./AppMovies";
import  { setPage, setTvShowPage, setCurrentPage } from "../reducers/user/userSlice";

const Footer = () => {
  const location = useLocation();
  const contentShow = (location.pathname === "/");
  const dispatch = useDispatch();
  const page = useSelector((state) => state.user.page);
  const tvShowPage = useSelector((state) => state.user.tvShowPage);
  const currentPage = useSelector((state) => state.user.currentPage);
  const contentLength = useSelector((state) => state.user.contentLength);


  // const {page, setPage, tvShowPage, setTvShowPage, currentPage, setCurrentPage, contentLength} = useContext(UserContext);

  const handleNextPage = () => {
    let pageIncrement = 1;
    if (location.pathname === "/movies") {
      dispatch(setPage(page + pageIncrement));
    }else {
      dispatch(setTvShowPage(tvShowPage + pageIncrement));
    }
    dispatch(setCurrentPage(currentPage + pageIncrement));
  };

  const handlePreviousPage = () => {
    if (location.pathname === "/movies") {
      if (page > 1) {
        dispatch(setPage(page - 1));
        dispatch(setCurrentPage(currentPage - 1));
      }
    }
    if (location.pathname === "/TvShowContent") {
      if (tvShowPage > 1) {
        dispatch(setTvShowPage(tvShowPage - 1));
        dispatch(setCurrentPage(currentPage - 1));
      }
    }
  };

  const handleResetPage = () => {
    dispatch(setPage(1));
    dispatch(setTvShowPage(1));
    dispatch(setCurrentPage(1));
  }
  
  return (
    <div>
      {!contentShow && 
        <div className="footer">
          
          <div>
              {((location.pathname === "/movies" && page > 1) ||
              (location.pathname === "/" && page > 1) ||
              (location.pathname === "/TvShowContent" && tvShowPage > 1)) && (
              <button className="footer_button" onClick={handlePreviousPage}>previous</button>
            )}

            {currentPage > 1 &&  
              <button className= "footer_button">{currentPage}</button> 
            }

            {contentLength && contentLength > 15 && 
              <button className="footer_button" onClick={handleNextPage}>next</button>
            }

          </div>
          {currentPage > 2 &&
            <button className="footer_button" onClick={handleResetPage}>Home Page</button>
          }
        </div>
      }
        
    </div>
  );
};

export default Footer;

