import React, { createContext, useContext, useState } from "react";

type User = { name: string } | undefined;

interface IAuthContext {
  user: User;
  login: () => Promise<unknown>;
  signup: () => Promise<unknown>;
  logout: () => Promise<unknown>;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<{ user: User }>({
    user: undefined,
  });

  const login = () => {
    setState({ user: { name: "John" } });
    return new Promise((res) => setTimeout(res, 1000));
  };

  const signup = login;

  const logout = () => {
    setState({ user: undefined });
    return new Promise((res) => setTimeout(res, 1000));
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (typeof ctx === "undefined" || ctx === null) {
    throw new Error("useAuth must be called within AuthContextProvider");
  }

  return ctx;
};
