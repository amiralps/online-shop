import {useEffect, useState} from "react";
import styles from "../styles/ProductsDetail.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../features/products/productSlice.js";
import {useParams} from "react-router-dom";
function ProductsDetail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
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
        <h1>{product.title}</h1>
        {product.images.map((image, index) => (
          <img
            className={styles.image}
            key={index}
            src={image}
            alt={product.title}
          />
        ))}
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
              <p>{item.namecolor}</p>
              <div style={{backgroundColor: item.code}}></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ProductsDetail;
