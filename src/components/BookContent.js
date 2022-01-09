import React from "react";
// import { Document } from 'react-pdf'   FOR THE DISPLAYING PDF
import styles from "../assets/scss/componentsStyles/BookContent.module.scss";

const BookContent = ({ book }) => {
  const handleReadTheBook = (id) => {};
  return (
    <div className={styles.bookContent}>
      {console.log(book)}
      <label>{book.title}</label>
      <p>{book.author}</p>
      <img src=""></img>
      <label>
        Add to library
        <input type="checkbox" />
      </label>
      <button onClick={() => handleReadTheBook(book.id)}>Read </button>
    </div>
  );
};
export default BookContent;
