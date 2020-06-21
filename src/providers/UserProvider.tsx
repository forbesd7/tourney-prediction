import React, { createContext, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../firebase";

type UserState = any;

interface UserStateContext {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

const defaultUserStateContext: UserStateContext = {
  user: null,
  setUser: (): void => {},
};

export const UserContext = createContext<UserStateContext>(
  defaultUserStateContext
);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserState>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      if (user) {
        setUser(user);
      }
    });
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
