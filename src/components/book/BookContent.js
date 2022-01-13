import React from "react";
import { useUser } from "../../context/UserCtx";
import { useModal } from "../../context/ModalCtx";
import { useCatalog } from "../../context/CatalogCtx";
import requester from "../../api/requester";
import ReactStars from "react-rating-stars-component";
import {FaBookOpen} from 'react-icons/fa';

import styles from "../../assets/scss/componentsStyles/BookContent.module.scss";

const BookContent = ({ book, list, setBooksList }) => {
  const { setIsOpenBookReader } = useModal();
  const { updateBookContext } = useCatalog();
  const { currentUser } = useUser();

  const handleClick = () => {
    updateBookContext(book);
    setIsOpenBookReader(true);
    // console.log(book.bookFileUrl);
    // return <a href={book.bookFileUrl} />;
  };
  const ratingChanged = (rating) => {
    requester
      .post(`User/BookRating`, {
        userId: currentUser.userId,
        bookId: book.id,
        rating: rating,
      })
      .then((res) => (console.log(res), updateBookContext(res)))
      .finally((fnl) => console.log(fnl));
  };
  const handleAddBookToLibrary = (bookId) => {
    return requester
      .post(`User/Book/?userId=${currentUser.userId}&id=${bookId}`)
      .then((res) => res)
      .finally((res) => console.log("set is Loading", res));
  };
  const handleDeleteBookFromLibrary = (bookId) => {
    return requester
      .remove(`User/Book?userId=${currentUser.userId}&id=${bookId}`)
      .then((res) => setBooksList(res))
      .finally((err) => console.log(err));
  };
  return (
    <div className={styles.bookContent}>
      <label className={styles["bookContent-title"]}>{book.title}</label>
      {!book.bookImageUrl ? (
        <FaBookOpen  className={styles["bookContent-icon"]} size={'7em'} />
      ) : (
        <img
          width={100}
          height={150}
          src={book.bookImageUrl}
          alt="book image"
        />
      )}
      <label className={styles["bookContent-authorTitle"]}>
        Author: <b>{book.author}</b>
      </label>
      <div className={styles["bookContent-rating"]}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          edit={currentUser.hasOwnProperty("userId") ? true : false}
          activeColor="#ffd700"
          value={book.rating}
        ></ReactStars>
      </div>
      {currentUser.hasOwnProperty("userId") ? (
        <button className={styles["bookContent-btnRead"]} onClick={handleClick}>
          Read
        </button>
      ) : (
        ""
      )}
      {currentUser.hasOwnProperty("userId") ?
      <button
        className={list ? styles["bookContent-btnAdd"]: styles['bookContent-removeBtn']}
        onClick={
          list
            ? () => handleDeleteBookFromLibrary(book.id)
            : () => handleAddBookToLibrary(book.id)
        }
      >
        {list ? "Remove from Library" : "Add to Library"}
      </button>
      : ""
      }
    </div>
  );
};
export default BookContent;
