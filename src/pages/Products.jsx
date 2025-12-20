import {useEffect} from "react";
import styles from "../styles/Products.module.css";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../components/Loading.jsx";
import {getProducts} from "../features/products/productSlice.js";
import Card from "../components/Card.jsx";
import { changeTitle } from "../helper/helper.js";
function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    changeTitle("محصولات");
  }, []);
  const {error, loading, products} = useSelector((state) => state.products);
  if (error) return <h1>{error}</h1>;
  if (!products.length || loading) return <Loading />;
  return (
    <ul className={styles.products}>
      {products.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </ul>
  );
}
export default Products;
