import React, { useContext, useEffect, useState } from "react";

const CatalogCtx = React.createContext();

export const useCatalog = () => {
  return useContext(CatalogCtx);
};

export const CatalogProvider = ({ children }) => {
  const [book, setBook] = useState({});
  const [movie,setMovie]= useState({})
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [book]);

  const updateBookContext = (bookInfo) => {
    setBook(bookInfo)
  };
  const updateMovieContext = (newMovie)=>{
    setMovie(newMovie);
  }
  const clearBookInfo= () => {
    setBook({});
  };

  const value = {
    book,
    movie,
    updateBookContext,
    updateMovieContext,
    isLoading,
    clearBookInfo,
  };

  return <CatalogCtx.Provider value={value}>{children}</CatalogCtx.Provider>;
};
