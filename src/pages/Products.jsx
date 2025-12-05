import {useEffect} from "react";
import styles from "../styles/Products.module.css";
import {useDispatch, useSelector} from "react-redux";
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
  if (!products.length || loading) return <h1>Loading ...</h1>;
  return (
    <div className={styles.products}>
      {products.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
export default Products;
