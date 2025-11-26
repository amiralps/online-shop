import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
function LayOutWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default LayOutWithNavbar;
