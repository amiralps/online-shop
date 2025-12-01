import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../features/products/productSlice.js";
import {useParams} from "react-router-dom";
import {FaRegCircleLeft} from "react-icons/fa6";
import {
  TbShoppingCartPlus,
  TbShoppingCartMinus,
  TbShoppingCartX,
  TbShoppingCartDown,
} from "react-icons/tb";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// import Swiper core and required modules
import {Navigation, FreeMode, Thumbs} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "../styles/ProductsDetail.module.css";
import styles2 from "../styles/ProductsDetail2.module.css";
import {
  removeItem,
  addItem,
  increment,
  decrement,
} from "../features/cart/cartSlice.js";

function ProductsDetail() {
  const {id} = useParams();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
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
      const scale = (1 + scrollY / -330).toFixed(3);
      const transform = `${Math.floor(scrollY / -1.89)}px`;

      // css variables
      document.documentElement.style.setProperty(
        "--scroll-scale",
        scale >= 0 ? scale : 0
      );
      document.documentElement.style.setProperty(
        "--scroll-transform",
        transform
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
          <div className={styles.mySlider}>
            <Swiper
              modules={[Navigation, FreeMode, Thumbs]}
              spaceBetween={10}
              navigation={true}
              // loop={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              className={styles.productImagesSwiper}>
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className={styles.image}
                    src={image}
                    alt={product.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              // allowTouchMove={false}
              onSwiper={setThumbsSwiper}
              // loop={product.images.length > 4 ? true : false}
              spaceBetween={2}
              slidesPerView={
                product.images.length > 4 ? 4 : product.images.length
              }
              noSwiping
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.productImagesPagination}>
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className={styles.image}
                    src={image}
                    alt={product.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.productDetails}>
            <button
              className={styles2.backButton}
              onClick={() => {
                history.back();
              }}>
              <FaRegCircleLeft />
            </button>
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
              <div className={styles2.buttons}>
                {/* add and increase */}
                <button
                  className={`${styles2.putBtn}${
                    thisCart?.colors[colorPick]?.quantity
                      ? ` ${styles2.active}`
                      : ""
                  }`}
                  onClick={() => {
                    !thisCart?.colors[colorPick].quantity
                      ? dispatch(
                          addItem({data: product, colorIndex: colorPick})
                        )
                      : dispatch(
                          increment({data: product, colorIndex: colorPick})
                        );
                  }}>
                  <div className={styles2.add}>
                    <p>افزودن به سبد</p>
                    <TbShoppingCartDown />
                  </div>
                  <TbShoppingCartPlus className={styles2.increase} />
                </button>
                <h2>{thisCart?.colors[colorPick]?.quantity || 0}</h2>
                {/* decrease and remove */}
                <button
                  className={`${styles2.popBtn}${
                    thisCart?.colors[colorPick]?.quantity &&
                    thisCart?.colors[colorPick]?.quantity <= 1
                      ? ` ${styles2.active}`
                      : thisCart?.colors[colorPick]?.quantity > 1
                      ? ` ${styles2.active} ${styles2.morethan1}`
                      : ""
                  }`}
                  onClick={() => {
                    thisCart?.colors[colorPick]?.quantity > 1
                      ? dispatch(
                          decrement({data: product, colorIndex: colorPick})
                        )
                      : dispatch(
                          removeItem({data: product, colorIndex: colorPick})
                        );
                  }}>
                  <TbShoppingCartMinus className={styles2.decrease} />
                  <TbShoppingCartX className={styles2.remove} />
                </button>
              </div>
              <span>{product.colors[colorPick].price}.000 تومان</span>
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
