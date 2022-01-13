import React from "react";
import { useModal } from "./../../context/ModalCtx";
import { useUser } from "./../../context/UserCtx";
import { useCatalog } from "./../../context/CatalogCtx";
import requester from "./../../api/requester";
import ReactStars from "react-rating-stars-component";
import ReactPlayer from "react-player";
import { FaVideo } from "react-icons/fa";

import styles from "../../assets/scss/componentsStyles/MovieContent.module.scss";

const MovieContent = ({ movie, list, setMovieList }) => {
  const { setIsOpenMoviePlayer } = useModal();
  const { updateMovieContext } = useCatalog();
  const { currentUser } = useUser();

  const handleClick = () => {
    updateMovieContext(movie);
    setIsOpenMoviePlayer(true);
  };

  const ratingChanged = (rating) => {
    requester
      .post(`User/MovieRating`, {
        userId: currentUser.userId,
        movieId: movie.id,
        rating: rating,
      })
      .then((res) => (console.log(res), updateMovieContext(res)))
      .finally((fnl) => console.log(fnl));
  };
  const handleAddMovieToLibrary = (movieId) => {
    return requester
      .post(`User/Movie/?userId=${currentUser.userId}&id=${movieId}`)
      .then((res) => res)
      .finally((res) => console.log("set is Loading", res));
  };

  const handleDeleteMovieFromLibrary = (movieId) => {
    return requester
      .remove(`User/Movie?userId=${currentUser.userId}&id=${movieId}`)
      .then((res) => setMovieList(res))
      .finally((err) => console.log(err));
  };

  return (
    <div className={styles.movieContent}>
      {!movie.movieImageUrl ? (
        <FaVideo className={styles["movieContent-icon"]} size={"7em"} />
      ) : (
        <img
          width={180}
          height={180}
          src={movie.movieImageUrl}
          alt="book image"
        />
      )}
      {!movie.movieImageUrl ? <h2>Movie: {movie.title}</h2> :''}
      <label className={styles["movieContent-genre"]}>
        Genre: <b>{movie.filmGenre}</b>
      </label>
      <div className={styles["movieContent-rating"]}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          edit={currentUser.hasOwnProperty("userId") ? true : false}
          activeColor="#ffd700"
          value={movie.rating}
        ></ReactStars>
      </div>
      {currentUser.hasOwnProperty("userId") ? (
        <button
          className={styles["movieContent-btnWatch"]}
          onClick={handleClick}
        >
          Watch
        </button>
      ) : (
        ""
      )}
      {currentUser.hasOwnProperty("userId") ? (
        <button
        className={list ? styles["movieContent-btnAdd"]: styles['movieContent-removeBtn']}
          onClick={
            list
              ? () => handleDeleteMovieFromLibrary(movie.id)
              : () => handleAddMovieToLibrary(movie.id)
          }
        >
          {list ? "Remove from Library" : "Add to Library"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default MovieContent;
