import React, { useState, useEffect } from "react";
import BookContent from "./BookContent.js";
import styles from "../../assets/scss/componentsStyles/BooksContainer.module.scss";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {toast} from "react-toastify";
import bookService from "../../services/bookService";

const BooksContainer = () => {
  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    bookService.getAllBooksURL()
      .then((res) => {
        setBooks(res);
        setIsLoading(false);
      })
      .catch((err) => (toast.error(err), setIsLoading(false)));
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
