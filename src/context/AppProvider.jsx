import { createContext, useReducer } from "react";
import reducerFunc from "../hooks/reducerFunc";
import defaultState from "../hooks/defaultState";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, defaultState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
