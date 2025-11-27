import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../features/products/productSlice.js";
import {useParams} from "react-router-dom";
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

      // مقدار scale (مثلاً بین 1 تا 1.5)
      const scale = 1 + scrollY / -500;

      // ست کردن CSS Variable روی root
      document.documentElement.style.setProperty("--scroll-scale", scale);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  const {error, loading, products} = useSelector((state) => state.products);
  const [colorPick, setColorPick] = useState(0);
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
              <button>افزودن به سبد</button>
              <span>تومان {product.colors[colorPick].price}.000</span>
            </div>
            <p className={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              quibusdam, illum totam aliquid velit ad nemo? Odio est,
              exercitationem inventore, eum facere iusto quae excepturi incidunt
              odit magni natus porro ea atque amet aliquid nemo. Nemo fugiat
              repudiandae repellat illo doloribus iusto suscipit debitis numquam
              deserunt excepturi. Ipsum cupiditate ipsa tempora, amet eos culpa
              dolorem veniam, fugit, quasi at laboriosam totam voluptas eligendi
              dolores sequi iure vero est in? Aliquam doloribus sed facere
              ratione eum dolorem, alias at laborum, quos reiciendis nesciunt
              quidem animi modi! Obcaecati laudantium ut corporis labore
              reiciendis soluta blanditiis dignissimos iure odit sapiente? Aut
              consequuntur eum dolorum sapiente maxime vitae minima, dolor, quia
              dolore quae, officiis consequatur accusantium iure cum? Unde hic
              laborum laboriosam iure dolorem. Magnam aliquam vero earum
              cupiditate libero tempora veritatis nemo quae? Aspernatur
              accusamus reiciendis itaque corporis laboriosam adipisci illo
              laudantium quos incidunt consequuntur dicta blanditiis veniam
              natus eius aperiam pariatur similique atque nisi soluta repellat,
              doloribus ducimus mollitia odit. Ipsa, itaque exercitationem dolor
              quo voluptatum excepturi laborum eos dicta quasi quisquam, culpa
              corrupti, aliquam nisi. Consequatur natus, temporibus reiciendis
              quas incidunt optio fugit cum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsDetail;
