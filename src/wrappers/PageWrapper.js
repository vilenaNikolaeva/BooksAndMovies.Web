import React from "react";
import styles from "../assets/scss/componentsStyles/PageWrapper.module.scss"

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
