import { useLocation } from "react-router-dom";

const Footer = ({page, setPage, tvShowPage, setTvShowPage, currentPage, setCurrentPage, contentLength}) => {
  const location = useLocation();
  const contentShow = (location.pathname === "/");
  const handleNextPage = () => {
    let pageIncrement = 1;
    if (location.pathname === "/movies") {
      setPage(page + pageIncrement);
    }else {
      setTvShowPage(tvShowPage + pageIncrement);
    }
    setCurrentPage(currentPage + pageIncrement);
  };

  const handlePreviousPage = () => {
    if (location.pathname === "/movies") {
      if (page > 1) {
        setPage(page - 1);
        setCurrentPage(currentPage - 1);
      }
    }
    if (location.pathname === "/TvShowContent") {
      if (tvShowPage > 1) {
        setTvShowPage(tvShowPage - 1);
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleResetPage = () => {
    setPage(1);
    setTvShowPage(1);
    setCurrentPage(1);
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

            {contentLength && contentLength > 19 && 
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

