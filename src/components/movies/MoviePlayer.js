import React from "react";
import { useModal } from "./../../context/ModalCtx";
import { useCatalog } from "./../../context/CatalogCtx";
import ModalWrapper from "./../../wrappers/ModalWrapper";
import ReactPlayer from "react-player";

import styles from '../../assets/scss/componentsStyles/MoviePlayer.module.scss';

const MoviePlayer = () => {
  const { isOpenMoviePlayer, closeModal } = useModal();
  const { movie } = useCatalog();
  return (
    <ModalWrapper
      setIsOpenModalComponent={closeModal}
      isOpenModalComponent={isOpenMoviePlayer}
    >
      <div className={styles.playerContainer}>
          <button className={styles['playerContainer-closeBtn']} onClick={closeModal}>X</button>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=DHRlGl0u1Ds"}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { origin: "https://www.youtube.com" },
            },
            preload: true,
          }}
        ></ReactPlayer>
      </div>
    </ModalWrapper>
  );
};

export default MoviePlayer;
