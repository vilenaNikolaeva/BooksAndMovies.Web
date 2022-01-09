import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './../components/userForms/Login';
import SignUp from './../components/userForms/SignUp';
import HomePage from './../pages/HomePage';
import UserLibrary from './../pages/UserLibraryPage';

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/userLibrary" element={<UserLibrary/>} />
    </Routes>
  );
}

export default AppRouter;