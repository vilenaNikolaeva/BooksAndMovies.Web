import React from "react";
import styles from "../assets/scss/componentsStyles/BookContent.module.scss";
import BookReader from "./BookReader.js";
import { useModal } from "./../context/ModalCtx";
import { useCatalog } from "./../context/CatalogCtx";
import { Link } from "react-router-dom";
import requester from "./../api/requester";
import { useUser } from "./../context/UserCtx";

const BookContent = ({ book , list}) => {
  const { setIsOpenBookReader } = useModal();
  const { updateBookContext } = useCatalog();
  const { currentUser } = useUser();
  console.log('in book content')
  const handleClick = () => {
    updateBookContext(book);
    setIsOpenBookReader(true);
    // console.log(book.bookFileUrl);
    // return <a href={book.bookFileUrl} />;
  };

  const handleAddBookToLibrary = (bookId) => {
    requester
      .post(`User/${bookId}?userId=${currentUser.userId}`)
      .then((res) =>res)
      .finally((re) => console.log("end"));
  };
  const handleDeleteBookFromLibrary =(bookId)=>{
    console.log('DELETE')
  }
  return (
    <div className={styles.bookContent}>
      <label className={styles["bookContent-title"]}>{book.title}</label>
      <img width={150} height={200} src={book.bookImageUrl} alt="book image" />
      <label  className={styles["bookContent-authorTitle"]}> Author: <b>{book.author}</b>
      </label>
      <label>Add to library
        <button
          className={styles["bookContent-addBtn"]}
          onClick={()=> list? handleDeleteBookFromLibrary(book.id) : () => handleAddBookToLibrary(book.id)}>
          {list ? "Delete" : "Add"}
        </button>
      </label>
      {currentUser.hasOwnProperty('userId') ? (<button  onClick={handleClick}>Read</button>):''}
    </div>
  );
};
export default BookContent;
