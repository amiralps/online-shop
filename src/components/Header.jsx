import {Link, NavLink} from "react-router-dom";
import styles from "../styles/Header.module.css";
import {LiaShoppingCartSolid} from "react-icons/lia";
import {useSelector} from "react-redux";
import {RiMoonClearLine} from "react-icons/ri";
import {BsFillSunFill} from "react-icons/bs";
import {useState} from "react";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function themeHandler() {
    if (theme === "Dark") {
      localStorage.removeItem("theme");
      document.querySelector("html").classList.remove("Dark");
      setTheme("Light");
    } else {
      localStorage.setItem("theme", "Dark");
      document.querySelector("html").classList.add("Dark");
      setTheme("Dark");
    }
  }
  const {selectedItems, itemsCounter, totalCount} = useSelector(
    (state) => state.cart
  );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.rightdiv}>
          <h3>
            <Link to={"/"}>
              <img src="/policy-sunglasses.svg" alt="logo" />
              عینک اپتیک
            </Link>
          </h3>
        </div>
        <div className={styles.centerdiv}>
          <ul>
            <li>
              <NavLink to="/">خانه</NavLink>
            </li>
            <li>
              <NavLink to="products">محصولات</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.leftdiv}>
          <ul>
            <li className="cart">
              <NavLink to="/shopping-cart">
                <LiaShoppingCartSolid />
                {itemsCounter ? <div>{itemsCounter}</div> : ""}
              </NavLink>
            </li>
            <li>
              <button
                className={styles.themeBtn}
                onClick={() => {
                  themeHandler()
                  // if (localStorage.getItem("theme") === "Dark") {
                  //   localStorage.removeItem("theme");
                  //   document.querySelector("html").classList.remove("Dark");
                  // } else {
                  //   localStorage.setItem("theme", "Dark");
                  //   document.querySelector("html").classList.add("Dark");
                  // }
                }}>
                <RiMoonClearLine className={styles.moon} />
                <BsFillSunFill className={styles.sun} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
