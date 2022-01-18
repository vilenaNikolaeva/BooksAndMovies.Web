import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUser } from "./../context/UserCtx";
import styles from "../assets/scss/componentsStyles/Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { currentUser, clearUserInfo } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    clearUserInfo();
    navigate("/");
  };

  return (
    <nav className={styles.headerContainer}>
      <div>
        <li className={styles["headerContainer-homeBtn"]}>
          <Link to="/">
            <FaHome size={"2.8em"} />
          </Link>
        </li>
      </div>
      <div className={styles["headerContainer-menuContainer"]}>
      <li className={styles["headerContainer-menu"]}>
              <Link to="/books">Books </Link>
            </li>
            <li className={styles["headerContainer-menu"]}>
              <Link to="/movies">Movies </Link>
            </li>
        {currentUser.hasOwnProperty("token") ||
        typeof currentUser === "string" ? (
          <>
            <li className={styles["headerContainer-menu"]}>
              <Link to="/userLibrary"> User Library</Link>
            </li>
            <button
              onClick={handleLogout}
              className={styles["headerContainer-logout"]}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <li className={styles["headerContainer-menu"]}>
              <Link to="/login"> Login</Link>
            </li>
            <li className={styles["headerContainer-menu"]}>
              <Link to="/signup"> SignUp</Link>
            </li>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
