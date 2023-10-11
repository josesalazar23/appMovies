import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainPopularContent from "./MainPopularContent";
import MainNewContent from "./MainNewContent";
import MovieContent from "./MovieContent";
import TvShowContent from "./TvShowContent";
import Footer from "./Footer";
import { setPage, setTvShowPage, setCurrentPage, setContentLength, setUrl, setTitle, loadInitialData } from '../reducers/user/userSlice';

const AppMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(setTvShowPage(1));
    dispatch(setCurrentPage(1));
    dispatch(setContentLength(null));
    dispatch(setUrl(''));
    dispatch(setTitle(''));
    dispatch(loadInitialData()); // Carga las películas la primera vez utilizando Redux 
  }, [dispatch]);
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/" 
          element={
            <>  
              <MainPopularContent />
              <MainNewContent />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <MovieContent />
            </>
          }
        />
        <Route
          path="/TvShowContent"
          element={
            <>
              <TvShowContent />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppMovies;