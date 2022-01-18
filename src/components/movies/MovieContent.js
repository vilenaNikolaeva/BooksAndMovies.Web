import React from "react";
import { useModal } from "./../../context/ModalCtx";
import { useUser } from "./../../context/UserCtx";
import { useCatalog } from "./../../context/CatalogCtx";
import requester from "./../../api/requester";
import ReactStars from "react-rating-stars-component";
import { FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";

import styles from "../../assets/scss/componentsStyles/MovieContent.module.scss";
import userService from "./../../services/userService";

const MovieContent = ({ movie, list, setMovieList }) => {
  const { setIsOpenMoviePlayer } = useModal();
  const { updateMovieContext } = useCatalog();
  const { currentUser } = useUser();

  const handleClick = () => {
    updateMovieContext(movie);
    setIsOpenMoviePlayer(true);
  };

  const ratingChanged = (rating) => {
    userService.postUserMovieRating(currentUser.userId, movie.id, rating)
      .then((res) => updateMovieContext(res))
      .catch((err) => toast.error(err));
  };
  const handleAddMovieToLibrary = (movieId) => {
    userService.addMovieToUserLibrary(currentUser.userId,movieId)
      .then((res) => toast.success('Added'))
      .catch((err) => toast.error(err));
  };

  const handleDeleteMovieFromLibrary = (movieId) => {
    userService.removeMovieFromUserLibrary(currentUser.userId,movieId)
      .then((res) =>(toast.success('Removed'), setMovieList(res)))
      .catch((err) => toast.error(err));
  };

  return (
    <div className={styles.movieContent}>
      <p> {movie.watched ? <b>Watched </b> : <b>Not watched</b>}</p>
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
      {!movie.movieImageUrl ? <h2>Movie: {movie.title}</h2> : ""}
      <label className={styles["movieContent-genre"]}>
        <b>{movie.title}</b>
      </label>
      <label className={styles["movieContent-genre"]}>
        {movie.filmGenre}
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
          className={
            list
              ? styles["movieContent-btnAdd"]
              : styles["movieContent-removeBtn"]
          }
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
