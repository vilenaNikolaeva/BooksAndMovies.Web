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
      const userLocalData2 = sessionStorage.getItem("userId");
      if (userLocalData && userLocalData2) {
        console.log('in if')
        setCurrentUser({"token":userLocalData, "userId": userLocalData2});
      }
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [currentUser]);

  const updateUserContext = (newUserInfo) => {
    sessionStorage.setItem("token", newUserInfo.token);
    sessionStorage.setItem("userId",newUserInfo.userId)
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
