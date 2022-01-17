import React, { useState, } from "react";
import styles from "../../assets/scss/componentsStyles/BookReader.module.scss";
import { useCatalog } from "../../context/CatalogCtx";
import { useModal } from "./../../context/ModalCtx";
import ModalWrapper from "./../../wrappers/ModalWrapper";
import { Document, Page } from "react-pdf/dist/umd/entry.parcel";

const BookReader = () => {
  const { isOpenBookReader, closeModal } = useModal();
  const { book } = useCatalog();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <ModalWrapper
      setIsOpenModalComponent={closeModal}
      isOpenModalComponent={isOpenBookReader}>
      <div className={styles.readerContainer}>
        <Document file={"https://firebasestorage.googleapis.com/v0/b/booksandmovies-cf479.appspot.com/o/books%2FBruder-Grimm_-_Rumpelshtiltshen_-_48620.pdf?alt=media&token=c0ee9ebf-1e0b-4c96-ab5b-4b4c1745e96f"} 
        onLoadSuccess={onDocumentLoadSuccess}>
          <Page style={styles["modalContent-page"]} pageNumber={pageNumber} />
        </Document>
        <p className={styles['readerContainer-page']}>
          Page {pageNumber} of {numPages}
        </p>
        <div>
        </div>
        <div className={styles['readerContainer-btnContainer']}>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}>
          Next
        </button>
        </div>
      </div>
    </ModalWrapper>
  );
};
export default BookReader;
