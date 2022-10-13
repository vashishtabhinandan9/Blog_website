import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{//alue is what you want to be provided all around the 
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,//dispatch is also passed as it would be used by all childred to call reducer actions
      }}
    >
      {children}
    </Context.Provider>
  );
};