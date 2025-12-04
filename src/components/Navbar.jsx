import {NavLink} from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { LiaShoppingCartSolid } from "react-icons/lia";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/">خانه</NavLink>
        </li>
        <li>
          <NavLink to="products">محصولات</NavLink>
        </li>
        <li className="cart">
          <NavLink to="shopping-cart"><LiaShoppingCartSolid /></NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
