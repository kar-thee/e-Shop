import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const useShopStates = () => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("inCart", JSON.stringify([...state.inCart]));
  }, [state.inCart]);

  return state;
};

export default useShopStates;
