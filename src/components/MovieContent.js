import React from "react";
import styles from '../assets/scss/componentsStyles/MovieContent.module.scss'

const MovieContent = ({ movie }) => {

const  watchTheMovie = (id) =>{
    
}
  return (
    <div className={styles.movieContent}>
        {console.log(movie)}
      <label>{movie.title}</label>
      <p>{movie.filmGenre}</p>
        {/* REACT PLAYER      */}
      <label>
        Add to library
        <input type="checkbox" />
      </label>
      <button onClick={()=>watchTheMovie(movie.id)} >Watch </button>
    </div>
  );
};
export default MovieContent;
