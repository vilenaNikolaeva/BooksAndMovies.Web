import React, { useContext, useEffect, useState } from "react";

const CatalogCtx = React.createContext();

export const useCatalog = () => {
  return useContext(CatalogCtx);
};

export const CatalogProvider = ({ children }) => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [book]);

  const updateBookContext = (bookInfo) => {
    console.log(bookInfo);
    setBook(bookInfo)
  };
  const clearBookInfo= () => {
    setBook({});
  };

  const value = {
    book,
    updateBookContext,
    isLoading,
    clearBookInfo,
  };

  return <CatalogCtx.Provider value={value}>{children}</CatalogCtx.Provider>;
};
