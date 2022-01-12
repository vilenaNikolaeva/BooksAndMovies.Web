import React, { useState, useEffect } from "react";
import requester from "../../api/requester";
import BookContent from "./BookContent.js";
import styles from "../../assets/scss/componentsStyles/BooksContainer.module.scss";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const BooksContainer = () => {
  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    setIsLoading(true);
    requester
      .get("Book")
      .then((res) => {
        setBooks(res);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(false);
  }, [isLoading, setBooks]);

  return (
    <div className={styles.wrappContainer}>
      {books?.map((b, index) => (
        <BookContent key={index} book={b} />
      ))}
    </div>
  );
};

export default BooksContainer;
