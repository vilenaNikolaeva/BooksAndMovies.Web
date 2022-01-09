import React, { useContext, useEffect, useState } from "react";

const UserCtx = React.createContext();

export const useUser = () => {
  return useContext(UserCtx);
};

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Object.entries(currentUser).length === 0) {
      const userLocalData = sessionStorage.getItem("token");
      if (userLocalData) {
        setCurrentUser(userLocalData);
      }
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [currentUser]);

  const updateUserContext = (newUserInfo) => {
    sessionStorage.setItem("token", newUserInfo.token);
    setCurrentUser(newUserInfo);
  };
  const clearUserInfo = () => {
    setCurrentUser({});
    sessionStorage.clear();
  };

  const value = {
    currentUser,
    updateUserContext,
    isLoading,
    clearUserInfo,
  };

  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};
