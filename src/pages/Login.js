import React, { useState } from "react";
import requester from "./../api/requester";
import { useUser } from "./../context/UserCtx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { updateUserContext } = useUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatedPass, setRepeatedPass] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || repeatedPass === "") {
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
    <div>
      <p> Login Form</p>
      <form onSubmit={onLoginSubmit}>
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
        <div>
          <button type="submit"> LogIn </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
