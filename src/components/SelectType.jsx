import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectType = ({
  setMovies,
  page,
  setPage,
  setContentLength,
  setCurrentPage,
  setShowSelectType,
  setShowMovieType,
  showMovieType,
  setTitle,
}) => {
  const [selectedType, setSelectedType] = useState("");

  const cambio = () => {
    setPage(1);
    setCurrentPage(1);
  };

  const handleTypeMovie = async (e) => {
    if (showMovieType) {
      return;
    }
  
    if (e.target && e.target.value) {
      const selectedType = e.target.value;
      setSelectedType(selectedType);
  
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&with_genres=${selectedType}&page=${page}`
        );
        
        const filteredMovies = response.data.results.filter(movie => movie.poster_path !== null);
        setMovies(filteredMovies);
        setContentLength(filteredMovies.length);
        setShowSelectType(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setShowMovieType(false)
    setTitle(e.target.innerText);
    handleTypeMovie(e);
    cambio();
  };

  useEffect(() => {
    handleTypeMovie({ target: { value: selectedType } });
  }, [page, selectedType]);

  return (
    <>
      <div className="selectMovies">
        <button onClick={handleOnChange} value="28">Action</button>
        <button onClick={handleOnChange} value="12">Adventure</button>
        <button onClick={handleOnChange} value="16">Animation</button>
        <button onClick={handleOnChange} value="35">Comedy</button>
        <button onClick={handleOnChange} value="80">Crime</button>
        <button onClick={handleOnChange} value="99">Documentary</button>
        <button onClick={handleOnChange} value="18">Drama</button>
        <button onClick={handleOnChange} value="10751">Family</button>
        <button onClick={handleOnChange} value="14">Fantasy</button>
        <button onClick={handleOnChange} value="36">History</button>
        <button onClick={handleOnChange} value="27">Horror</button>
        <button onClick={handleOnChange} value="10402">Music</button>
        <button onClick={handleOnChange} value="9648">Mystery</button>
        <button onClick={handleOnChange} value="10749">Romance</button>
        <button onClick={handleOnChange} value="878">Science Fiction</button>
        <button onClick={handleOnChange} value="53">Thriller</button>
        <button onClick={handleOnChange} value="10752">War</button>
        <button onClick={handleOnChange} value="37">Western</button>
      </div>
    </>
  );
};

export default SelectType;
