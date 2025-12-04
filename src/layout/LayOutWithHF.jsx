import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
function LayOutWithHF() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default LayOutWithHF;
