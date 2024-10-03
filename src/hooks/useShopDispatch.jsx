import { useContext } from "react";
import AppContext from "../context/AppContext";

const useShopDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
export default useShopDispatch;
