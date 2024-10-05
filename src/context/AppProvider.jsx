import { useReducer } from "react";
import reducerFunc from "../hooks/reducerFunc";
import defaultState from "../hooks/defaultState";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, defaultState, () => {
    const inCartFromStorage = JSON.parse(localStorage.getItem("inCart"));

    return {
      ...defaultState,
      inCart: inCartFromStorage ? [...inCartFromStorage] : [],
    };
  });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
