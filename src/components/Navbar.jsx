import {NavLink} from "react-router-dom";
import styles from "../styles/Navbar.module.css";

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
        <li>
          <NavLink to="shopping-cart">سبد خرید</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
