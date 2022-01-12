import React from "react";
import styles from "../../assets/scss/componentsStyles/BookContent.module.scss";
import { useModal } from "../../context/ModalCtx";
import { useCatalog } from "../../context/CatalogCtx";
import requester from "../../api/requester";
import { useUser } from "../../context/UserCtx";

const BookContent = ({ book, list,setBooksList }) => {
  const { setIsOpenBookReader } = useModal();
  const { updateBookContext } = useCatalog();
  const { currentUser } = useUser();
  
  const handleClick = () => {
    updateBookContext(book);
    setIsOpenBookReader(true);
    // console.log(book.bookFileUrl);
    // return <a href={book.bookFileUrl} />;
  };

  const handleAddBookToLibrary =  (bookId) => {
    return  requester
      .post(`User/Book/?userId=${currentUser.userId}&id=${bookId}`)
      .then((res) => res)
      .finally((res) => console.log("set is Loading",res));
  };
  const handleDeleteBookFromLibrary =  (bookId) => {
     return   requester
      .remove(`User/Book?userId=${currentUser.userId}&id=${bookId}`)
      .then((res) => 
      setBooksList(res))
      .finally((err) => console.log(err));
  };
  return (
    <div className={styles.bookContent}>
      <label className={styles["bookContent-title"]}>{book.title}</label>
      <img width={100} height={150} src={book.bookImageUrl} alt="book image" />
      <label className={styles["bookContent-authorTitle"]}>
        Author: <b>{book.author}</b>
      </label>
      {currentUser.hasOwnProperty("userId") ? (
        <button  className={styles["bookContent-btnRead"]}  onClick={handleClick}>Read</button>
      ) : (
        ""
      )}
        <button
          className={styles["bookContent-btnAdd"]}
          onClick={
            list
              ? ()=> handleDeleteBookFromLibrary(book.id)
              : () => handleAddBookToLibrary(book.id)
          }
        >
          {list ? "Remove from Library" : "Add to Library"}
        </button >
    </div>
  );
};
export default BookContent;
