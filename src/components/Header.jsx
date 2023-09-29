import { useEffect, createContext, useContext  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { setCurrentPage, setPage, setTvShowPage } from "../reducers/user/userSlice";
// import { UserContext } from "./AppMovies";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const {setPage, setTvShowPage, setCurrentPage} = useContext(UserContext);

  // const page = useSelector((state) => state.user.page);
  // const tvShowPage = useSelector((state) => state.user.tvShowPage);
  // const currentPage = useSelector((state) => state.user.currentPage);

  
  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(setPage(1));
    dispatch(setTvShowPage(1));
  }, [location.pathname, dispatch]);

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
                <NavLink to="/TvShowContent">TV Shows</NavLink>
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
