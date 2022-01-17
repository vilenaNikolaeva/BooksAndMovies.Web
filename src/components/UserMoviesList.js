import React, { useState, useEffect } from "react";
import requester from "../api/requester";
import { useUser } from "../context/UserCtx";
import MovieContent from "./movies/MovieContent";

import styles from "../assets/scss/componentsStyles/UserMovieList.module.scss";
import {toast} from 'react-toastify';
import userService from './../services/userService';

const UserMoviesList = () => {
  const [movieList, setMovieList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showMovies, setShowmovies] = useState(true);
  const { currentUser } = useUser();

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    userService.getUserMoviesList(currentUser.userId)
      .then((res) => {
        if(res.hasOwnProperty('status')){
          return toast.error(res.title)
        }
        setMovieList(res);
        setIsLoading(false);
      })
      .catch((err) => (toast.error(err),setIsLoading(false)));
    setIsLoading(false);
  }, [isLoading, setMovieList]);

  return (
    <div className={styles.movieListContainer}>
      <h1>
        <button onClick={() => setShowmovies(!showMovies)}>Your Movies</button>
      </h1>
      <div hidden={showMovies}>
        {movieList?.map((m, index) => (
          <MovieContent
            key={index}
            movie={m}
            list={"list"}
            setMovieList={setMovieList}
          />
        ))}
      </div>
    </div>
  );
};
export default UserMoviesList;
