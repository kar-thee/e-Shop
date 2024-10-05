import { useReducer } from "react";
import reducerFunc from "../hooks/reducerFunc";
import defaultState from "../hooks/defaultState";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, defaultState, () => {
    const inCartFromStorage = JSON.parse(localStorage.getItem("inCart"));
    const ordersFromStorage = JSON.parse(localStorage.getItem("placedOrders"));

    return {
      ...defaultState,
      inCart: inCartFromStorage ? [...inCartFromStorage] : [],
      placedOrders: ordersFromStorage ? ordersFromStorage : [],
    };
  });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
