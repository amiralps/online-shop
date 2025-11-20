import axios from "axios";
import {useEffect, useState} from "react";
import styles from "../styles/Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("products/data.json").then((res) => setProducts(res.data));
  }, []);
  console.log(products);
  if (!products.length) return <h1>Loading ...</h1>;
  return (
    <>
      <ul>
        {products.map((i) => (
          <li key={i.id}>
            <h1>{i.title}</h1>
            {i.images.map((image, index) => (
              <img
                className={styles.image}
                key={index}
                src={image}
                alt={i.title}
              />
            ))}
            <p>{i.description}</p>
            <ul className={styles.colors}>
              {i.colors.map((items, index) => (
                <li style={{backgroundColor: items.code}} key={index}></li>
              ))}
              : رنگ ها
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Products;
