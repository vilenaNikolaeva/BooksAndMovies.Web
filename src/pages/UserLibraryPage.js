import React from "react";
import PageWrapper from "./../wrappers/PageWrapper";
import UserBooksList from "./../components/UserBooksList.js";
import UserMoviesList from "./../components/UserMoviesList";
import styles from "../assets/scss/componentsStyles/UserLibraryPage.module.scss";

const UserLibrary = () => {
  return (
    <PageWrapper>
      <div className={styles.libraryContainer}>
        <div>
          <UserBooksList />
        </div>
        <div>
          <UserMoviesList />
        </div>
      </div>
    </PageWrapper>
  );
};
export default UserLibrary;
