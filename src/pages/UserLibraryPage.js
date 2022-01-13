import React, { useState } from "react";
import PageWrapper from "./../wrappers/PageWrapper";
import UserBooksList from "./../components/UserBooksList.js";
import UserMoviesList from "./../components/UserMoviesList";
import styles from "../assets/scss/componentsStyles/UserLibraryPage.module.scss";

const UserLibrary = () => {
  const [showBooks, setShowBooks] = useState(true);
  const [showMovies, setShowmovies] = useState(true);

  return (
    <PageWrapper>
      {/* <div className={styles.libraryContainer}>
        <button onClick={()=>setShowBooks(!showBooks)}>Books</button>
        <button onClick={()=>setShowmovies(!showMovies)}>Movies</button>
      </div>
      <div   hidden={showBooks}>
      <button onClick={()=>setShowBooks(!showBooks)}>Books</button>
        <UserBooksList/>
      </div>
      <div  hidden={showMovies}>
      <UserMoviesList/>
      </div> */}
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
