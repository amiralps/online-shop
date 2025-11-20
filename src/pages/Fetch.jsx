import axios from "axios";
import {useEffect, useState} from "react";
import styles from "../styles/Products.module.css"

function Fetch() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("products/data.json").then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <ul>
        {products.length &&
          products.map((i) => (
            <li key={i.id}>
              <h1>{i.title}</h1>
              {i.images.map((image, index) => (
                <img className={styles.image} key={index} src={image} alt={i.title} />
              ))}
              <p>{i.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
export default Fetch;
