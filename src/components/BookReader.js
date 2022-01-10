import react, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "../assets/scss/componentsStyles/BookReader.module.scss";
import { useCatalog } from "./../context/CatalogCtx";
import ModalWrapper from "./../wrappers/ModalWrapper";
import { useModal } from "./../context/ModalCtx";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const BookReader = () => {
  const { isOpenBookReader, closeModal } = useModal();
  const { book } = useCatalog();
  const file = (pdfjs.getFilenameFromUrl.workerSrc = String(book.bookFileUrl));
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    setNumPages(numPages);
  };
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
      isOpenModalComponent={isOpenBookReader}
    >
      <div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page style={styles["modalContent-page"]} pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </ModalWrapper>
  );
};
export default BookReader;
