import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../features/products/productSlice.js";
import {Link, useParams} from "react-router-dom";
import {IoCloseCircleOutline} from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";


import styles from "../styles/ProductsDetail.module.css";
import styles2 from "../styles/ProductsDetail2.module.css";
import Buttons from "../components/Buttons.jsx";
import ThumbSlider from "../components/ThumbSlider.jsx";
import {changeTitle, priceFormat} from "../helper/helper.js";
import { LiaShoppingCartSolid } from "react-icons/lia";

function ProductsDetail() {
  const {id} = useParams();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const dispatch = useDispatch();
  useEffect(() => {
    changeTitle(`عینک${id}`);
    dispatch(getProducts());
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth > 1024);
    });
    return window.removeEventListener("resize", () => {
      setIsDesktop(window.innerWidth > 1024);
    });
  }, []);
  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;

      // scale val
      const scale = (1 + scrollY / -360).toFixed(3);

      // css variables
      document.documentElement.style.setProperty(
        "--scroll-scale",
        scale >= 0 ? scale : 0
      );
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  const cartStatus = useSelector((state) => state.cart);
  const {error, loading, products} = useSelector((state) => state.products);
  const [colorPick, setColorPick] = useState(0);
  const thisCart = cartStatus.selectedItems.find((item) => item.id == id);
  if (error) return <h1>{error}</h1>;
  if (!products.length || loading) return <h1>Loading ...</h1>;
  const product = products.find((i) => i.id == id);
  if (!product)
    return (
      <>
        <h1>404</h1>
        <h3>Page Not Found</h3>
      </>
    );
  return (
    <>
      <div>
        <div className={styles.productDAS}>
          <div className={styles2.back_box_favorite}>
            <button
              className={styles2.backButton}
              onClick={() => {
                history.back();
              }}>
              <IoCloseCircleOutline />
            </button>
            <div className={styles2.box_favorite}>
              <Link to="/shopping-cart">
                <LiaShoppingCartSolid />
              </Link>
              <button>
                <GoHeart />
                {/* <GoHeartFill /> */}
              </button>
            </div>
          </div>
          <ThumbSlider data={{product}} />
          <div className={styles.productDetails}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>رنگ : {product.colors[colorPick].namecolor}</p>
            <ul className={styles.colors}>
              {product.colors.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setColorPick(index);
                  }}
                  className={colorPick == index ? styles.active : null}>
                  <div style={{backgroundColor: item.code}}></div>
                  {!isDesktop ? <p>{item.namecolor}</p> : null}
                </li>
              ))}
            </ul>
            <div className={styles2.addToBox}>
              <Buttons data={{thisCart, colorPick, dispatch, product}} />
              <span>{priceFormat(product.colors[colorPick].price)}</span>
            </div>
            <p className={styles.description}>
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
              <br />
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsDetail;
