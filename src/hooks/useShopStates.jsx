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

    localStorage.setItem(
      "productsArray",
      JSON.stringify([...state.productsArray])
    );
    localStorage.setItem(
      "categoriesArray",
      JSON.stringify([...state.categoriesArray])
    );
  }, [
    state.inCart,
    state.placedOrders,
    state.productsArray,
    state.categoriesArray,
  ]);

  return state;
};

export default useShopStates;
