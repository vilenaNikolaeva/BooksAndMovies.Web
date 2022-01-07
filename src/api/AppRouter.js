import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import isGuest from './../guards/isGuest';
import { useUser } from './../context/UserCtx';

function AppRouter() {
  const {currentUser} = useUser();

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRouter;