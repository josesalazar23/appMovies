import axios from "axios";

export const fetchPopularMovies = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    console.log(response)
    return response.data.results.slice(0, 12);
  } catch (error) {
    throw error;
  }
};

export const fetchNewMovies = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=18&release_date.lte=1980-12-31`
    );
    return response.data.results.slice(0, 12);
  } catch (error) {
    throw error;
  }
};

export const fetchFamilyMovies = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=99`
    );
    console.log(response)
    return response.data.results.slice(0, 12);
  } catch (error) {
    throw error;
  }
};

export const fetchMangaMovies = async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=16`
    );
    return response.data.results.slice(0, 12);
  } catch (error) {
    throw error;
  }
};