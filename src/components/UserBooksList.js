import React, { useState, useEffect } from "react";
import requester from "../api/requester";
import { useUser } from "../context/UserCtx";
import BookContent from "./book/BookContent.js";
import styles from "../assets/scss/componentsStyles/UserBooksList.module.scss";

const UserBooksList = () => {
  const [booksList, setBooksList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showBooks, setShowBooks] = useState(true);
  const { currentUser } = useUser();

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);
    requester
      .get(`User/Books?id=${currentUser.userId}`)
      .then((res) => {
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
        {/* <h1>Your Books</h1> */}
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
