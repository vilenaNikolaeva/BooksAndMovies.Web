import React , { useState, useEffect} from "react";
import styles from "../assets/scss/componentsStyles/MoviesContainer.module.scss";
import requester from '../api/requester';
import MovieContent from './MovieContent';

const MoviesContainer = () => {
    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
  
        if(isLoading) return;
  
      setIsLoading(true);
      requester
        .get("Movie")
        .then((res) => {
            setMovies(res);
          setIsLoading(false);
        })
        .finally(() => setIsLoading(false));
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
