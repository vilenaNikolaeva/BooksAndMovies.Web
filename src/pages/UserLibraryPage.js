import React from "react";
import PageWrapper from "./../wrappers/PageWrapper";
import UserBooksList from './../components/UserBooksList.js';

const UserLibrary = () => {
  return (
    <PageWrapper>
      <div>
        <UserBooksList/>
      </div>
      <div>Your Movies</div>
      <div>Your Tv Series</div>
    </PageWrapper>
  );
};
export default UserLibrary;
