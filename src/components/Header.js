import React, { StrictMode } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./../context/UserCtx";
import styles from "../assets/scss/componentsStyles/Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { currentUser, clearUserInfo } = useUser();
  const navigate= useNavigate();
  const handleLogout = () => {
    clearUserInfo();
    navigate('/');
  };

  return (
    <nav className={styles.headerContainer}>
      <li>
        <Link to="/">Home</Link>
      </li>
      {currentUser.hasOwnProperty("token") ||  typeof currentUser === 'string' ? (
        <>
        <li>
          <Link to="/userLibrary"> Personal Library</Link>
        </li>
        <button onClick={handleLogout} className={styles['headerContainer-logout']}>Logout</button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <li>
            <Link to="/signup"> SignUp</Link>
          </li>
        </>
      )}
    </nav>
  );
};

export default Header;
