import React, { useState, useEffect } from "react";
import requester from "../api/requester";
import { useUser } from "../context/UserCtx";
import styles from "../assets/scss/componentsStyles/UserMovieList.module.scss";
import MovieContent from "./movies/MovieContent";

const UserMoviesList = () => {
  const [movieList, setMovieList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showMovies, setShowmovies] = useState(true);
  const { currentUser } = useUser();

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    requester
      .get(`User/Movies?id=${currentUser.userId}`)
      .then((res) => {
        setMovieList(res);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
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
