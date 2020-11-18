import React, { createContext, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
  isAuth: false,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Actions
  const loginUser = (user) => {
    console.log(state);
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        user: state.user,
        dispatch,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
