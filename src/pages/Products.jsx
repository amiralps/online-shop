import {useEffect} from "react";
import styles from "../styles/Products.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../features/products/productSlice.js";
import {Link} from "react-router-dom";
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const {error, loading, products} = useSelector((state) => state.products);
  if (error) return <h1>{error}</h1>;
  if (!products.length || loading) return <h1>Loading ...</h1>;
  return (
    <>
      <ul className={styles.products}>
        {products.map((item) => (
          <li key={item.id}>
            <h1>{item.title}</h1>
            <Link to={`/products/${item.id}`}>
              <img
                className={styles.image}
                src={item.images[0]}
                alt={item.title}
              />
            </Link>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Products;
