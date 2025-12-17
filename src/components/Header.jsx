import {Link, NavLink} from "react-router-dom";
import styles from "../styles/Header.module.css";
import TMStyle from "../styles/ToggleMenu.module.css";
import {LiaShoppingCartSolid} from "react-icons/lia";
import {useSelector} from "react-redux";
import {RiMoonClearLine} from "react-icons/ri";
import {BsFillSunFill} from "react-icons/bs";
import {useEffect, useRef, useState} from "react";
import {HiHome} from "react-icons/hi2";
import {HiOutlineLogin} from "react-icons/hi";
import {AiFillProduct} from "react-icons/ai";

function Header() {
  const toggleMenu = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function themeHandler() {
    if (theme === "Dark") {
      localStorage.setItem("theme", "Light");
      document.documentElement.classList.remove("Dark");
      setTheme("Light");
    } else {
      localStorage.setItem("theme", "Dark");
      document.documentElement.classList.add("Dark");
      setTheme("Dark");
    }
  }
  function classRemover() {
    if (toggleMenu.current.className.includes(TMStyle.open)) {
      toggleMenu.current.classList.remove(TMStyle.open);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 900);
    });
    return window.removeEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 900);
    });
  }, []);
  const {selectedItems, itemsCounter, totalCount} = useSelector(
    (state) => state.cart
  );
  return (
    <>
      <header className={styles.header}>
        {!isMobile ? (
          <>
            <div className={styles.logo}>
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
                      themeHandler();
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
          </>
        ) : (
          <>
            <div className={TMStyle.login}><HiOutlineLogin /></div>
            <div className={styles.logo}>
              <h3>
                <Link to={"/"}>
                  <img src="/policy-sunglasses.svg" alt="logo" />
                  عینک اپتیک
                </Link>
              </h3>
            </div>
            <div
              className={TMStyle.menu}
              ref={toggleMenu}
              onClick={() => {
                toggleMenu.current.classList.toggle(TMStyle.open);
              }}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className={TMStyle.leftContainer}
              onClick={() => {
                classRemover();
              }}></div>
            <div className={TMStyle.list}>
              <ul>
                <li>
                  <button
                    className={styles.themeBtn}
                    onClick={() => {
                      themeHandler();
                    }}>
                    <RiMoonClearLine className={styles.moon} />
                    <BsFillSunFill className={styles.sun} />
                  </button>
                  <div className="cart">
                    <NavLink
                      to="/shopping-cart"
                      onClick={() => {
                        classRemover();
                      }}>
                      <LiaShoppingCartSolid />
                      {itemsCounter ? <div>{itemsCounter}</div> : ""}
                    </NavLink>
                  </div>
                </li>
                <li className={TMStyle.URLs}>
                  <NavLink
                    to={"/"}
                    onClick={() => {
                      classRemover();
                    }}>
                    <HiHome /> خانه
                  </NavLink>
                </li>
                <li className={TMStyle.URLs}>
                  <NavLink
                    to={"/products"}
                    onClick={() => {
                      classRemover();
                    }}>
                    <AiFillProduct /> محصولات
                  </NavLink>
                </li>
                {/* <li><NavLink to={""} ></NavLink></li> */}
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
}
export default Header;
