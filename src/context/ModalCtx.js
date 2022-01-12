import React, { useContext, useState } from 'react';

const ModalCtx = React.createContext();

export const useModal = () => useContext(ModalCtx);

export const ModalProvider = ({ children }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [isOpenBookReader, setIsOpenBookReader] = useState(false);
    const [isOpenMoviePlayer, setIsOpenMoviePlayer]= useState(false);

    const showMoviePlayer=()=>{
        setIsOpenMoviePlayer(true);
    }
    const showBookReader = () => {
        setIsOpenBookReader(true);
    }
  
    const closeModal = () => {
        setSelectedId(null);
        setIsOpenBookReader(false);
        setIsOpenMoviePlayer(false);
    }

    const value = {
        closeModal,
        selectedId,
        isOpenBookReader,
        isOpenMoviePlayer,
        setSelectedId,
        setIsOpenBookReader,
        setIsOpenMoviePlayer,
        showBookReader,
        showMoviePlayer,
    };
    return <ModalCtx.Provider value={value}>{children}</ModalCtx.Provider>;
};
