import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Header = ({setPage, setCurrentPage, setTvShowPage}) => {
  const location = useLocation();

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
                <NavLink to="/">Inicio</NavLink>
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