
import { createSlice } from '@reduxjs/toolkit';
import { useFetchPopularMovies, useFetchNewMovies, useFetchFamilyMovies, useFetchMangaMovies } from '../../components/helpers/useAxiosApi';

// buscar en el local storage si la key "moviesState"
// si existe setear el contenido como initial state
// si no setearlo como esta actuaalmente
const initialState = {
    page: 1,
    tvShowPage: 1,
    currentPage: 1,
    contentLength: null,
    url: '',
    title: '',
    mainNewContentData: {
      popularMovies: [],
      newMovies: [],
      familyMovies: [],
      mangaMovies: [],
    },
  };

  const getMoviesStateFromLocalStorage = () => {
    let moviesState = localStorage.getItem('moviesState');
    if (!moviesState) {
      // Si la keyy no existe, ps se crea un nuevo estado en localStorage
      moviesState = JSON.stringify(initialState);
      localStorage.setItem('moviesState', moviesState);
    }
    return JSON.parse(moviesState);
  };
  
  export const userSlice = createSlice({
    name: 'user',
    initialState: getMoviesStateFromLocalStorage(),
    reducers: {
      setPage: (state, action) => {
        state.page = action.payload;
      },
      setTvShowPage: (state, action) => {
        state.tvShowPage = action.payload;
      },
      setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
      setContentLength: (state, action) => {
        state.contentLength = action.payload;
      },
      setUrl: (state, action) => {
        state.url = action.payload;
      },
      setTitle: (state, action) => {
        state.title = action.payload;
      },

      setPopularMovies: (state, action) => {
        state.mainNewContentData.popularMovies = action.payload;
      },
      setNewMovies: (state, action) => {
        state.mainNewContentData.newMovies = action.payload;
      },
      setFamilyMovies: (state, action) => {
        state.mainNewContentData.familyMovies = action.payload;
      },
      setMangaMovies: (state, action) => {
        state.mainNewContentData.mangaMovies = action.payload;
      },
    },
  });
  
  export const {
      setPage,
      setTvShowPage,
      setCurrentPage,
      setContentLength,
      setUrl,
      setTitle,
      setPopularMovies,
      setNewMovies,
      setFamilyMovies, 
      setMangaMovies,
    } = userSlice.actions;


export const loadInitialData = () => {
    return async (dispatch, getState) => {
      const { popularMovies, newMovies, familyMovies, mangaMovies } = getState().user.mainNewContentData;
      
      // comprueba si y hay datos en el estado
      if (popularMovies.length === 0 || newMovies.length === 0 || familyMovies.length === 0 || mangaMovies.length === 0) {
        try {
          // Obtener datos de la API
          const popularMoviesData = await useFetchPopularMovies();
          const newMoviesData = await useFetchNewMovies();
          const familyMoviesData = await useFetchFamilyMovies();
          const mangaMoviesData = await useFetchMangaMovies();
  
          // Actualizar el estado de Redux con los datos de la API
          dispatch(setPopularMovies(popularMoviesData));
          dispatch(setNewMovies(newMoviesData));
          dispatch(setFamilyMovies(familyMoviesData));
          dispatch(setMangaMovies(mangaMoviesData));
  
          // Guardar el estado actualizado en el local storage
          localStorage.setItem('moviesState', JSON.stringify(getState().user));
        } catch (error) {
          console.error(error);
        }
      }
    };
  };

export default userSlice.reducer;