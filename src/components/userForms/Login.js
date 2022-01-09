import React, { useState } from "react";
import requester from "../../api/requester";
import { useUser } from "../../context/UserCtx";
import { useNavigate } from "react-router-dom";
import Header from './../Header';

import styles from '../../assets/scss/componentsStyles/UserForm.module.scss'

const Login = () => {
  const { updateUserContext } = useUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return <p> ERROR --All fields are required!</p>;
    }

    try {
      setIsLoading(true);
      requester
        .post("Authentication/login", { email: email, password: password })
        .then((res) => {
          updateUserContext(res);
          setIsLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={onLoginSubmit} className={styles['formContainer-form']}>
          <input
            name="email"
            type="email"
            placeholder="Place your email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="Place your password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className={styles['formContainer-form-btnBox']}>
            <button type="submit"> LogIn </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
