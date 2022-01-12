import React from "react";

import BookReader from "./book/BookReader";
import { useModal } from "./../context/ModalCtx";
import MoviePlayer from "./movies/MoviePlayer";

const Modals = () => {
  const { isOpenBookReader, isOpenMoviePlayer } = useModal();

  return (
    <div>
      {isOpenBookReader ? <BookReader /> : null}
      {isOpenMoviePlayer ? <MoviePlayer /> : null}
    </div>
  );
};

export default Modals;
