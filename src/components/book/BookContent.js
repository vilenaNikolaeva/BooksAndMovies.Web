import React from "react";
import { useUser } from "../../context/UserCtx";
import { useModal } from "../../context/ModalCtx";
import { useCatalog } from "../../context/CatalogCtx";
import ReactStars from "react-rating-stars-component";
import {FaBookOpen} from 'react-icons/fa';

import styles from "../../assets/scss/componentsStyles/BookContent.module.scss";
import {toast} from 'react-toastify';
import userService from './../../services/userService';

const BookContent = ({ book, list, setBooksList }) => {
  const { setIsOpenBookReader } = useModal();
  const { updateBookContext } = useCatalog();
  const { currentUser } = useUser();

  const ratingChanged = (rating) => {
    userService.postUserBookRating(currentUser.userId,book.id,rating)
      .then((res) => updateBookContext(res))
      .catch((err) => toast.error(err));
  };
  const handleAddBookToLibrary = (bookId) => {
    userService.addBookToUserLibrary(currentUser.userId,bookId)
      .then((res) => toast.success('Added'))
      .catch((err) => toast.error(err));
  };
  const handleDeleteBookFromLibrary = (bookId) => {
    userService.removeBookToUserLibrary(currentUser.userId,bookId)
      .then((res) => (toast.success('Removed'),setBooksList(res)))
      .catch((err) => toast.error(err));
  };
  return (
    <div className={styles.bookContent}>
      <p> {book.readed ? <b>Readed </b> : <b>Not read</b>}</p>
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
       <label className={styles["bookContent-title"]}>{book.title}</label>
      <label className={styles["bookContent-authorTitle"]}>
        Author: {book.author}
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
        <a className={styles["bookContent-btnRead"]}  href={book.bookFileUrl} target="_blank" >
          Read
        </a>
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
