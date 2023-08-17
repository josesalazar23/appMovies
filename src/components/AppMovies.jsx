import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPopularContent from "./MainPopularContent";
import MainNewContent from "./MainNewContent";
import MovieContent from "./MovieContent";
import Footer from "./Footer";
import TvShowContent from "./TvShowContent";
import Header from "./Header"

const UserContext = createContext()

function AppMovies() {
  const [page, setPage] = useState(1);
  const [tvShowPage, setTvShowPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentLength, setContentLength] = useState();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("")

  const userContextValue = {
    page,
    setPage,
    tvShowPage,
    setTvShowPage,
    currentPage,
    setCurrentPage,
    contentLength,
    setContentLength,
    url,
    setUrl,
    title,
    setTitle,
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={userContextValue}>
        <Header />
        <Routes>
          <Route
            path="/" 
            element={
              <>  
                <MainPopularContent />
                <MainNewContent />
              </>
            }/>
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
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export { UserContext };
export default AppMovies;



