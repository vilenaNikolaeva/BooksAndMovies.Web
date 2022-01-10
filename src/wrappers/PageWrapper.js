import React from "react";
import styles from "../assets/scss/componentsStyles/PageWrapper.module.scss";
import Modals from "./../components/Modals";

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {children}
        <Modals />
      </div>
    </div>
  );
};

export default PageWrapper;
