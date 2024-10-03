import { useContext } from "react";
import AppContext from "../context/AppContext";

const useShopStates = () => {
  const { state } = useContext(AppContext);
  return state;
};

export default useShopStates;
