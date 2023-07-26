import { useState, useEffect } from "react";
import axios from "axios";

// section main Content
export const useFetchMainContent = () => {
    const [popularMovie, setPopularMovie] = useState([])
    useEffect(() => {
        const handleFetch = async() => {
            try {
                const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
                const response = await axios.get(
                  `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
                );
    
                const firstPopularMovies = response.data.results.slice(0, 12);
                setPopularMovie(firstPopularMovies);
            } catch (error) {
                console.log(error);
            }
        }
        handleFetch();
    }, []); 

    return popularMovie;
};


export const useFetchPopularMovies = () => {
  const [popularMovie, setPopularMovie] = useState([])
  useEffect(() => {
      const handleFetch = async() => {
          try {
              const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
              const response = await axios.get(
                  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
              );
              const firstPopularMovies = response.data.results.slice(0, 12);
              setPopularMovie(firstPopularMovies);
          } catch (error) {
              console.log(error);
          }
      }
      handleFetch();
  }, []); 

  return popularMovie;
};



export const useFetchNewMovies = () => {
  const [popularMovie, setPopularMovie] = useState([])
  useEffect(() => {
      const handleFetch = async() => {
          try {
              const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
              const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=18&release_date.lte=1980-12-31`
              );
              const firstPopularMovies = response.data.results.slice(0, 12);
              setPopularMovie(firstPopularMovies);
          } catch (error) {
              console.log(error);
          }
      }
      handleFetch();
  }, []); 

  return popularMovie;
};

export const useFetchFamilyMovies = () => {
  const [popularMovie, setPopularMovie] = useState([])
  useEffect(() => {
      const handleFetch = async() => {
          try {
              const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
              const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=99`
              );
              const firstPopularMovies = response.data.results.slice(0, 12);
              setPopularMovie(firstPopularMovies);
          } catch (error) {
              console.log(error);
          }
      }
      handleFetch();
  }, []); 

  return popularMovie;
};

export const useFetchMangaMovies = () => {
  const [popularMovie, setPopularMovie] = useState([])
  useEffect(() => {
      const handleFetch = async() => {
          try {
              const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
              const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=16`
              );
              const firstPopularMovies = response.data.results.slice(0, 12);
              setPopularMovie(firstPopularMovies);
          } catch (error) {
              console.log(error);
          }
      }
      handleFetch();
  }, []); 

  return popularMovie;
};

export const useFetchNewTvShows = () => {
  const [popularMovie, setPopularMovie] = useState([])
  useEffect(() => {
      const handleFetch = async() => {
          try {
              const apiKey = "addca2007d9e1f9e7fdccf326e9c2ac6";
              const response = await axios.get(
                  `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
              );
              const firstPopularMovies = response.data.results.slice(0, 12);
              setPopularMovie(firstPopularMovies);
          } catch (error) {
              console.log(error);
          }
      }
      handleFetch();
  }, []); 

  return popularMovie;
};
































