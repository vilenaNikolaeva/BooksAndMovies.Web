import React, { useState } from "react";
import { useUser } from "../../context/UserCtx";
import { useNavigate } from "react-router-dom";
import {toast} from  "react-toastify";

import styles from '../../assets/scss/componentsStyles/UserForm.module.scss'
import userService from './../../services/userService';

const Login = () => {
  const { updateUserContext } = useUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return toast.error('ERROR --All fields are required!')
    }

    try {
      setIsLoading(true);
       userService.addUserLoginDetails(email,password)
       .then((res) => {
            if(res.hasOwnProperty('status')){
              return toast.error(`Error Occured. --Wrong email ot password!`);
            }
            updateUserContext(res);
            setIsLoading(false);
            toast.success('Logged in');
            navigate("/");
          })
          .catch((err) => {
            toast.error("Error Occured.Try Again.");
          });
      setIsLoading(false);
    } catch (error) {
      toast.error("Error Occured.Try Again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h1>Login</h1>
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
