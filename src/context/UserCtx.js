import React, { useContext, useEffect, useState } from "react";


const UserCtx = React.createContext();

export const useUser = () => {
  return useContext(UserCtx);
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentUser === null || currentUser === undefined) {
      setCurrentUser({});
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [currentUser]);

  const updateUserContext = (newUserInfo) => {
    sessionStorage.setItem("token", newUserInfo.token);
    setCurrentUser(newUserInfo);
    setIsLoading(false);
  };
  const clearUserInfo = () => {
    setCurrentUser({});
    setIsLoading(false);
  };

  const value = {
    currentUser,
    updateUserContext,
    isLoading,
    clearUserInfo,
  };

  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};
