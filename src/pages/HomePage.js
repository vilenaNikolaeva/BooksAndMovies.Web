import React from "react";
import styles from "../assets/scss/componentsStyles/Home.module.scss";
import { Link } from "react-router-dom";
import PageWrapper from "../wrappers/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <div className={styles.homeContainer}>
        <div className={styles["homeContainer-titles"]}>
          <h1 className={styles["homeContent-titles-homeTitle"]}>
            Wonder what to do in your free time?! 
          </h1>
          <h2 className={styles["homeContent-titles-catalogsTitle"]}>
            Check out the catalogs below 
          </h2>
        </div>
        <Link to="/BooksContainer"> Catalog Books</Link>
        <Link to="/MoviesContainer"> Catalog Movies</Link>
      </div>
    </PageWrapper>
  );
};
export default HomePage;
