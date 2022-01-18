import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserCtx";
import BookContent from "./book/BookContent.js";

import styles from "../assets/scss/componentsStyles/UserBooksList.module.scss";
import userService from "./../services/userService";
import { toast } from 'react-toastify';

const UserBooksList = () => {
  const [booksList, setBooksList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showBooks, setShowBooks] = useState(true);
  const { currentUser } = useUser();

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    userService
      .getUserBooksList(currentUser.userId)
      .then((res) => {
        if(res.hasOwnProperty('status')){
          return toast.error(res.title)
        }
        setBooksList(res);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(false);
  }, [isLoading, setBooksList]);

  return (
    <div className={styles.booksListContainer}>
      <h1>
        <button onClick={() => setShowBooks(!showBooks)}>Your Books</button>
      </h1>
      <div hidden={showBooks}>
        {booksList?.map((b, index) => (
          <BookContent
            key={index}
            book={b}
            list={"list"}
            setBooksList={setBooksList}
          />
        ))}
      </div>
    </div>
  );
};
export default UserBooksList;
