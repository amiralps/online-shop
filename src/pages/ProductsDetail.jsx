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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in tempora culpa, nam, eius, blanditiis ducimus sit magnam delectus minus beatae aliquam libero aspernatur? Necessitatibus dolorum explicabo eveniet enim labore tempore consectetur ullam consequuntur eligendi sapiente, blanditiis consequatur eos illum distinctio ipsum ipsa voluptatum perferendis harum facilis, quibusdam fugiat? Voluptatum, exercitationem reiciendis repellat quasi officia recusandae amet eaque ex dolores dolore consectetur unde vitae in ad nobis est. Consectetur deleniti rem natus saepe, rerum tenetur in sunt repellat dicta ducimus accusamus labore et nisi iure sint quasi corrupti! Doloribus, sit, dolorum tempore odit impedit molestias esse, at ex tempora nam fuga hic ducimus aliquid quos laborum. Voluptatibus omnis aperiam, at molestiae earum velit, corrupti modi beatae nemo sapiente nisi dolorem similique reprehenderit. Quis, pariatur, natus deserunt amet quo inventore architecto consequuntur vitae ex officiis nulla. Non, labore! Officiis temporibus dolorum nemo at doloribus non eveniet laudantium consectetur voluptas, voluptatibus eligendi laboriosam ad adipisci ducimus cumque repudiandae aliquam cum ipsam sunt deserunt autem excepturi! Aperiam, ab vel quas ratione voluptas accusamus laboriosam harum! Veniam iste illo quia nesciunt aperiam laboriosam delectus nostrum. Nesciunt quae ipsum nisi placeat veritatis ab, fugiat, optio sit illum iste at cumque officia eligendi unde quod obcaecati voluptates blanditiis, consectetur natus. Dolor provident nobis non nostrum debitis? Ipsum, iure. Dolores, quidem expedita vitae maiores laboriosam aspernatur, repellendus delectus accusantium iure officia nobis. Itaque culpa aliquam quibusdam laborum quae molestias, exercitationem magni, a accusantium tenetur corporis beatae officiis ad, perferendis numquam neque dignissimos perspiciatis ullam! Quod, sunt explicabo consectetur blanditiis voluptates ullam tempore. Est odio, nulla id dicta totam nisi inventore fugiat excepturi consequatur suscipit, exercitationem voluptatum ullam. Nostrum culpa sit autem, molestiae dolorem ullam eos, iure, nisi modi voluptates neque fuga quae commodi voluptas officiis laudantium perspiciatis obcaecati ipsum totam labore nam aliquid? Quisquam aspernatur hic incidunt quasi, ipsa cumque molestiae eligendi quo illum. Illum porro sequi doloribus fugiat quod recusandae veniam vel possimus minus, placeat ut perspiciatis accusamus ullam rem ab minima saepe explicabo culpa pariatur qui fugit consequatur, distinctio odit illo. Nostrum provident quis, natus itaque fugit repudiandae placeat odit. Sint doloribus earum laudantium aspernatur quos temporibus illo, fugiat cupiditate in non explicabo ea consequatur iusto rem, magni vero quibusdam id.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsDetail;
