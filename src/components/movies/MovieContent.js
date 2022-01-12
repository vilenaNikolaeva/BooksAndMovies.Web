import React from "react";
import styles from "../../assets/scss/componentsStyles/MovieContent.module.scss";
import { useUser } from "./../../context/UserCtx";
import { useCatalog } from "./../../context/CatalogCtx";
import requester from "./../../api/requester";
import { useModal } from "./../../context/ModalCtx";
import ReactPlayer from "react-player";

const MovieContent = ({ movie, list, setMovieList }) => {
  const { setIsOpenMoviePlayer } = useModal();
  const { currentUser } = useUser();
  const { updateMovieContext } = useCatalog();

  const handleClick = () => {
    updateMovieContext(movie);
    setIsOpenMoviePlayer(true);
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
      <img
        width={180}
        height={180}
        src={movie.movieImageUrl}
        alt="book image"
      />
      <label className={styles["movieContent-genre"]}>
        Genre: <b>{movie.filmGenre}</b>
      </label>
      {currentUser.hasOwnProperty("userId") ? (
        <button className={styles["movieContent-btnWatch"]} 
        onClick={handleClick}
        >
          Watch
        </button>
      ) : (
        ""
      )}
     <button
        className={styles["movieContent-btnAdd"]}
        onClick={
          list
            ? () => handleDeleteMovieFromLibrary(movie.id)
            : () => handleAddMovieToLibrary(movie.id)
        }
      >
        {list ? "Remove from Library" : "Add to Library"}
      </button>
    </div>
  );
};
export default MovieContent;
