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
        <Header 
          // setPage={setPage}
          // setTvShowPage={setTvShowPage}
          // setCurrentPage={setCurrentPage}
        />
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
                <MovieContent 
                  // page={page}
                  // setPage={setPage}
                  // setContentLength={setContentLength}
                  // setCurrentPage={setCurrentPage}
                  // url={url}
                  // setUrl={setUrl}
                  // title={title}
                  // setTitle={setTitle}
                />
              </>
            }
          />
          <Route
            path="/TvShowContent"
            element={
              <>
                <TvShowContent
                  // page={tvShowPage}
                  // setPage={setTvShowPage}
                  // setContentLength={setContentLength}
                  // currentPage={currentPage}
                  // setCurrentPage={setCurrentPage}
                  // url={url}
                  // setUrl={setUrl}
                  // title={title}
                  // setTitle={setTitle}
                />
              </>
            }
          />
        </Routes>
        <Footer 
          // setPage={setPage} 
          // page={page} 
          // setTvShowPage={setTvShowPage}
          // tvShowPage={tvShowPage}
          // currentPage={currentPage}
          // setCurrentPage={setCurrentPage}
          // contentLength={contentLength}
        />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export { UserContext };
export default AppMovies;



