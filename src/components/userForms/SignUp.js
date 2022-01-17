import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./../../context/UserCtx";
import requester from "./../../api/requester";
import {toast} from  "react-toastify";

import styles from '../../assets/scss/componentsStyles/UserForm.module.scss';
import userService from './../../services/userService';

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
      return toast.error(' ERROR --All fields are required!');
    }

    try {
      setIsLoading(true);
      userService.addUserRegisterDetails(username,email,password)
        .then((res) => {
          if(res.hasOwnProperty('status')){
            return toast.error(res.title);
          }
          updateUserContext(res);
          setIsLoading(false);
          toast.success('Successfully signed up');
          navigate("/");
        })
        .catch((err) => {
          toast.err('Error Occured.Try Again!')
        });
      setIsLoading(false);
    } catch (error) {
      toast.err('Error Occured.Try Again!')
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
      <h1>Sign Up</h1>
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
