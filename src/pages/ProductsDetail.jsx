import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../features/products/productSlice.js";
import {Link, useParams} from "react-router-dom";
import {IoCloseCircleOutline} from "react-icons/io5";
import {GoHeart, GoHeartFill} from "react-icons/go";

import styles from "../styles/ProductsDetail.module.css";
import styles2 from "../styles/ProductsDetail2.module.css";
import Buttons from "../components/Buttons.jsx";
import ThumbSlider from "../components/ThumbSlider.jsx";
import {changeTitle, priceFormat, resizer} from "../helper/helper.js";
import {LiaShoppingCartSolid} from "react-icons/lia";
import {favorite} from "../features/cart/cartSlice.js";
import Loading from "../components/Loading.jsx";

function ProductsDetail() {
  const {id} = useParams();
  const isMobile = resizer();

  const dispatch = useDispatch();
  const cartStatus = useSelector((state) => state.cart);
  const {error, loading, products} = useSelector((state) => state.products);
  useEffect(() => {
    changeTitle(`عینک - ${id}`);
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty("--scroll-scale", 1);
    const scrollHandler = () => {
      if (location.href.includes(`/products/${id}`)) {
        const scrollY = window.scrollY;

        // scale val
        const scale = (1 + scrollY / -360).toFixed(3);

        // css variables
        document.documentElement.style.setProperty(
          "--scroll-scale",
          scale >= 0 ? scale : 0
        );
      }
    };

    window.addEventListener("scroll", () => {
      scrollHandler();
    });
    window.removeEventListener("scroll", () => {
      scrollHandler();
    });
    window.scrollTo({top: 0})
  }, []);
  const [colorPick, setColorPick] = useState(0);
  const thisCart = cartStatus.selectedItems.find((item) => item.id == id);
  if (error) return <h1>{error}</h1>;
  if (!products.length || loading) return <Loading />;
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
            <button
              className={
                !cartStatus.favoriteItems.find((item) => item.id === product.id)
                  ? null
                  : styles2.inFavorites
              }
              onClick={() => dispatch(favorite(product))}>
              <GoHeart />
              <GoHeartFill className={styles2.fillHeart} />
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
                {isMobile ? <p>{item.namecolor}</p> : null}
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
    </>
  );
}
export default ProductsDetail;
