import React, { useReducer } from "react";

const initialState = {
  user: null || localStorage.getItem("user"),
};

const reducers = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      break;
  }
};

export const AuthContext = React.createContext(); // dipanggil menggunakan useContext

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const value = {
    user: state.user,
    authLogin: (data) => {
      dispatch({ type: "LOGIN", payload: data });
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
