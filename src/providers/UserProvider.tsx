import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { User } from "firebase";

type UserState = User | null;

interface UserStateContext {
  user: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

const defaultUserStateContext = {
  user: null,
  setUser: (): void => {},
};

export const UserContext = createContext<UserStateContext>(
  defaultUserStateContext
);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserState>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
