import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./../../context/UserCtx";
import requester from "./../../api/requester";

import styles from '../../assets/scss/componentsStyles/UserForm.module.scss';

const SignUp = () => {
  const { updateUserContext } = useUser();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatedPass, setRepeatedPass] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSignUpSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || username === "") {
      return <p> ERROR --All fields are required!</p>;
    }

    try {
      setIsLoading(true);
      requester
        .post("Authentication/signup", {
          username: username,
          email: email,
          password: password,
        })
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
        <form onSubmit={onSignUpSubmit} className={styles['formContainer-form']}>
          <input
            name="username"
            type="text"
            placeholder="Place your username..."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
          <input
            name="repeatedPass"
            type="password"
            placeholder="Repeat your password..."
            value={repeatedPass}
            onChange={(e) => {
              setRepeatedPass(e.target.value);
            }}
          />
          <div className={styles['formContainer-form-btnBox']}>
            <button type="submit"> SignUp </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
