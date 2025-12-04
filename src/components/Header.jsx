import {NavLink} from "react-router-dom";
import styles from "../styles/Header.module.css";
import {LiaShoppingCartSolid} from "react-icons/lia";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <ul>
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="products">محصولات</NavLink>
          </li>
          <li className="cart">
            <NavLink to="shopping-cart">
              <LiaShoppingCartSolid />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
