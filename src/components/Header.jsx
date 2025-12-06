import {NavLink} from "react-router-dom";
import styles from "../styles/Header.module.css";
import {LiaShoppingCartSolid} from "react-icons/lia";
import {useSelector} from "react-redux";

function Header() {
  const {selectedItems, itemsCounter, totalCount} = useSelector(
    (state) => state.cart
  );
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
              {itemsCounter ? <div>{itemsCounter}</div> : ""}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
