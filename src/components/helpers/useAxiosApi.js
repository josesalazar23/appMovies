


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPopularMovies,
  setNewMovies,
  setFamilyMovies,
  setMangaMovies,
} from "../../reducers/user/userSlice";

import {
  fetchPopularMovies,
  fetchNewMovies,
  fetchFamilyMovies,
  fetchMangaMovies,
} from "./api";

// Hooks
export const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state) => state.user.mainNewContentData.popularMovies
  );

  useEffect(() => {
    if (!popularMovies.length) {
      const handleFetch = async () => {
        try {
          const firstPopularMovies = await fetchPopularMovies();
          dispatch(setPopularMovies(firstPopularMovies));
        } catch (error) {
          console.log(error);
        }
      };
      handleFetch();
    }
  }, [popularMovies, dispatch]);

  return popularMovies;
};

export const useFetchNewMovies = () => {
  const dispatch = useDispatch();
  const newMovies = useSelector(
    (state) => state.user.mainNewContentData.newMovies
  );

  useEffect(() => {
    if (!newMovies.length) {
      const handleFetch = async () => {
        try {
          const firstNewMovies = await fetchNewMovies();
          dispatch(setNewMovies(firstNewMovies));
        } catch (error) {
          console.log(error);
        }
      };
      handleFetch();
    }
  }, [newMovies, dispatch]);

  return newMovies;
};

export const useFetchFamilyMovies = () => {
  const dispatch = useDispatch();
  const familyMovies = useSelector(
    (state) => state.user.mainNewContentData.familyMovies
  );

  useEffect(() => {
    if (!familyMovies.length) {
      const handleFetch = async () => {
        try {
          const firstFamilyMovies = await fetchFamilyMovies();
          dispatch(setFamilyMovies(firstFamilyMovies));
        } catch (error) {
          console.log(error);
          console.log("error desde la llamada a la api");
        }
      };
      handleFetch();
    }
  }, [familyMovies, dispatch]);

  return familyMovies;
};

export const useFetchMangaMovies = () => {
  const dispatch = useDispatch();
  const mangaMovies = useSelector(
    (state) => state.user.mainNewContentData.mangaMovies
  );

  useEffect(() => {
    if (!mangaMovies.length) {
      const handleFetch = async () => {
        try {
          const firstMangaMovies = await fetchMangaMovies();
          dispatch(setMangaMovies(firstMangaMovies));
        } catch (error) {
          console.log(error);
        }
      };
      handleFetch();
    }
  }, [mangaMovies, dispatch]);

  return mangaMovies;
};




















