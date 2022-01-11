import react, { useState, useEffect } from "react";
import styles from "../assets/scss/componentsStyles/BookReader.module.scss";
import { useCatalog } from "./../context/CatalogCtx";
import ModalWrapper from "./../wrappers/ModalWrapper";
import { useModal } from "./../context/ModalCtx";

const BookReader = () => {
  const { isOpenBookReader, closeModal } = useModal();
  const { book } = useCatalog();
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   console.log(numPages);
  //   setNumPages(numPages);
  // };
  // const changePage = (offset) => {
  //   setPageNumber((prevPageNumber) => prevPageNumber + offset);
  // };

  // const previousPage = () => {
  //   changePage(-1);
  // };

  // const nextPage = () => {
  //   changePage(1);
  // };

  return (
    <ModalWrapper
      setIsOpenModalComponent={closeModal}
      isOpenModalComponent={isOpenBookReader}
    >
      <div>
        {/* <Document
         file={samplePDF}
         onLoadSuccess={onDocumentLoadSuccess}>
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
        </button> */}
      </div>
    </ModalWrapper>
  );
};
export default BookReader;
