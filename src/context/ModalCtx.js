import React, { useContext, useState } from 'react';

const ModalCtx = React.createContext();

export const useModal = () => useContext(ModalCtx);

export const ModalProvider = ({ children }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [isOpenBookReader, setIsOpenBookReader] = useState(false);
    const showBookReader = () => {
        setIsOpenBookReader(true);
    }
  
    const closeModal = () => {
        setSelectedId(null);
        setIsOpenBookReader(false);
    }

    const value = {
        closeModal,
        selectedId,
        isOpenBookReader,
        setSelectedId,
        setIsOpenBookReader,
        showBookReader,
    };
    return <ModalCtx.Provider value={value}>{children}</ModalCtx.Provider>;
};
