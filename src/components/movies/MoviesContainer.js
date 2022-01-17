import React , { useState, useEffect} from "react";
import styles from "../../assets/scss/componentsStyles/MoviesContainer.module.scss";
import MovieContent from './MovieContent';
import {toast} from 'react-toastify';
import movieService from './../../services/movieService';

const MoviesContainer = () => {
    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
  
        if(isLoading) return;
  
      setIsLoading(true);
      movieService.getAllMoviessURL()
        .then((res) => {
            setMovies(res);
          setIsLoading(false);
        })
        .catch((err) => (toast.error(err),setIsLoading(false)));
      setIsLoading(false);
    }, [isLoading,setMovies]);
    
  return (
    <div className={styles.wrappContainer}>
    {movies?.map((m,index)=>(
      <MovieContent key={index} movie={m}/>
    ))}
    </div>);
};

export default MoviesContainer;
