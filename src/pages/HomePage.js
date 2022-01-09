import React from "react";
import styles from '../assets/scss/componentsStyles/Home.module.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <div className={styles.homeContainer}>
        <Link to="/BooksContainer"> Catalog Books</Link>
        <Link to="/MoviesContainer"> Catalog Movies</Link>
        <Link to="/TvSeriesContainer"> Catalog Tv Series</Link>
      </div>
  );
};
export default HomePage;
