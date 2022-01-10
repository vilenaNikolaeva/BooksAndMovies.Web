import React from "react";
import styles from "../assets/scss/componentsStyles/BookContent.module.scss";
import BookReader from "./BookReader.js";
import { useModal } from "./../context/ModalCtx";
import { useCatalog } from "./../context/CatalogCtx";
import { Link } from 'react-router-dom';

const BookContent = ({ book }) => {
  const { setIsOpenBookReader } = useModal();
  const { updateBookContext } = useCatalog();

  const handleClick = () => {
    // updateBookContext(book);
    // setIsOpenBookReader(true)
    console.log(book.bookFileUrl);
    return <a href={book.bookFileUrl} />;
  };

  return (
    <div className={styles.bookContent}>
      <label>{book.title}</label>
      <p>{book.author}</p>
      <img width={150} height={200} src={book.bookImageUrl} alt="book image" />
      <label>
        Add to library
        <input type="checkbox" defaultChecked={book.readed} />
      </label>
      <a href={book.bookFileUrl} target="blank">Read</a>
      {/* <button onClick={handleClick}>Read</button> */}
    </div>
  );
};
export default BookContent;
