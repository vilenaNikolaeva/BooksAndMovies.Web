import React, { useState, useEffect } from "react";
import requester from "../api/requester";
import { useUser } from "../context/UserCtx";
import BookContent from "./BookContent.js";
import styles from '../assets/scss/componentsStyles/UserBooksList.module.scss';

const UserBooksList = () => {
  const [booksList, setBooksList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useUser();

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    console.log(currentUser.userId);
    requester
      .get(`Book/allUserBooks?id=${currentUser.userId}`)
      .then((res) => {
        console.log(res);
        setBooksList(res);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(false);
  }, [isLoading, setBooksList]);

  return (
    <div className={styles.booksListContainer} >
      <h1>Your Book Library</h1>
      {booksList?.map((b, index) => (
        <BookContent key={index} book={b} list={"list"} />
      ))}
    </div>
  );
};
export default UserBooksList;
