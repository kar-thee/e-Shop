import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function PageView() {
  return (
    <>
      <Navbar />

      {/* here all routing children components render  */}
      <Outlet />
    </>
  );
}

export default PageView;
