import { useEffect, createContext, useContext  } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "./AppMovies";

const Header = () => {
  const location = useLocation();
  const {setPage, setTvShowPage, setCurrentPage} = useContext(UserContext);

  useEffect(() => {
    setCurrentPage(1);
    setPage(1);
    setTvShowPage(1);
  }, [location.pathname]);

  return (
    <div>
      <header className="header">
        <h1 className="header__logo no-margin">
          Blog<span className="header__logoBold"> Movies</span>
        </h1>
        <div className="header__texto">
          <nav className="header__link">
            {window.location.pathname !== '/' && (
                <NavLink to="/">Home</NavLink>
            )}

            {window.location.pathname !== '/movies' && (
                <NavLink to="/movies" >Movies</NavLink>
            )}

            {window.location.pathname !== '/TvShowContent' && (
                <NavLink to="/TvShowContent">Tv Shows</NavLink>
            )}

          </nav>
        </div>
        
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
