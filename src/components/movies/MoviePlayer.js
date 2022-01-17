import React, { useState, useEffect } from "react";
import { useModal } from "./../../context/ModalCtx";
import { useCatalog } from "./../../context/CatalogCtx";
import ModalWrapper from "./../../wrappers/ModalWrapper";
import ReactPlayer from "react-player";

import styles from "../../assets/scss/componentsStyles/MoviePlayer.module.scss";
import requester from "./../../api/requester";
import { useUser } from "./../../context/UserCtx";
import {toast} from 'react-toastify';
import movieService from './../../services/movieService';

const MoviePlayer = () => {
  const { isOpenMoviePlayer, closeModal } = useModal();
  const { movie, updateMovieContext } = useCatalog();
  const { currentUser } = useUser();
  const [watchComplеte, setWatchComplеte] = useState(false);

  useEffect(() => {
    if (watchComplеte) {
      movieService.updateUserMovieWatchedStatus(currentUser.userId,movie.id,watchComplеte)
        .then((res) => updateMovieContext(res))
        .finally((err) => toast.error(err));
    }
  }, [watchComplеte]);

  const updatePlayerProgress = (player) => {
    if (player.played >= 0.99 && !movie.watched) {
      setWatchComplеte(true);
      // setWatchComplеte(true);

      //update movie context progress
      //         loaded: 0.8535082819630407
      // loadedSeconds: 125.46571744856699
      // played: 0.018559876837386566
      // playedSeconds: 2.728301895095825
    }
  };
  return (
    <ModalWrapper
      setIsOpenModalComponent={closeModal}
      isOpenModalComponent={isOpenMoviePlayer}
    >
      <div className={styles.playerContainer}>
        <button
          className={styles["playerContainer-closeBtn"]}
          onClick={closeModal}
        >
          X
        </button>
        <ReactPlayer
          url={movie.movieUrl}
          width="100%"
          height="100%"
          controls={true}
          onProgress={updatePlayerProgress}
          config={{
            youtube: {
              playerVars: { origin: "http://localhost:3000" },
            },
            preload: true,
          }}
        ></ReactPlayer>
      </div>
    </ModalWrapper>
  );
};

export default MoviePlayer;
