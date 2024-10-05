import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const useShopStates = () => {
  const { state } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("inCart", JSON.stringify([...state.inCart]));

    localStorage.setItem(
      "placedOrders",
      JSON.stringify([...state.placedOrders])
    );
  }, [state.inCart, state.placedOrders]);

  return state;
};

export default useShopStates;
