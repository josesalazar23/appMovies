// // import { useState, createContext } from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch, Provider } from 'react-redux';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainPopularContent from "./MainPopularContent";
// import MainNewContent from "./MainNewContent";
// import MovieContent from "./MovieContent";
// import Footer from "./Footer";
// import TvShowContent from "./TvShowContent";
// import Header from "./Header"
// // import store from '../store/store';
// import { setPage, setTvShowPage, setCurrentPage, setContentLength, setUrl, setTitle } from '../reducers/user/userSlice';
// import { useFetchPopularMovies, useFetchNewMovies, useFetchFamilyMovies, useFetchMangaMovies } from './helpers/useAxiosApi';
// import { loadInitialData } from '../reducers/user/userSlice';
// // const UserContext = createContext()


// const AppMovies = () => {
//   const dispatch = useDispatch();
//   // const [page, setPage] = useState(1);
//   // const [tvShowPage, setTvShowPage] = useState(1);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [contentLength, setContentLength] = useState();
//   // const [url, setUrl] = useState("");
//   // const [title, setTitle] = useState("")
//   const page = useSelector((state) => state.user.page);
//   const tvShowPage = useSelector((state) => state.user.tvShowPage);
//   const currentPage = useSelector((state) => state.user.currentPage);
//   const contentLength = useSelector((state) => state.user.contentLength);
//   const url = useSelector((state) => state.user.url);
//   const title = useSelector((state) => state.user.title);


//   useEffect(() => {
//     dispatch(setPage(1));
//     dispatch(setTvShowPage(1));
//     dispatch(setCurrentPage(1));
//     dispatch(setContentLength(null));
//     dispatch(setUrl(''));
//     dispatch(setTitle(''));
//   }, [dispatch]);


//   // const handlePageChange = (newPage) => {
//   //   dispatch(setPage(newPage));
//   // };

  
//   dispatch(loadInitialData());

//   return (
//       <BrowserRouter>
//           <Header />
//           <Routes>
//             <Route
//               path="/" 
//               element={
//                 <>  
//                   <MainPopularContent />
//                   <MainNewContent />
//                 </>
//               }/>
//             <Route
//               path="/movies"
//               element={
//                 <>
//                   <MovieContent />
//                 </>
//               }
//             />
//             <Route
//               path="/TvShowContent"
//               element={
//                 <>
//                   <TvShowContent />
//                 </>
//               }
//             />
//           </Routes>
//           <Footer />
//       </BrowserRouter>
//   );
// }

// export default AppMovies;



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
    dispatch(loadInitialData()); // Carga las peliculas la primera vez utilizando redux 
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(setTvShowPage(1));
    dispatch(setCurrentPage(1));
    dispatch(setContentLength(null));
    dispatch(setUrl(''));
    dispatch(setTitle(''));
    dispatch(loadInitialData()); // Carga las peliculas la primera vez utilizando redux 
  }, []);

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