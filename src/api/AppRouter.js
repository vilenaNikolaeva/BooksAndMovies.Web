import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './../components/userForms/Login';
import SignUp from './../components/userForms/SignUp';
import HomePage from './../pages/HomePage';
import UserLibrary from './../pages/UserLibraryPage';
import BooksContainer from './../components/book/BooksContainer';
import MoviesContainer from './../components/movies/MoviesContainer';

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/userLibrary" element={<UserLibrary/>} />
      <Route exact path="/booksContainer" element={<BooksContainer/>} />
      <Route exact path="/moviesCOntainer" element={<MoviesContainer/>} />
    </Routes>
  );
}

export default AppRouter;