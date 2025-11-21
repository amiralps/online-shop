import axios from "axios";
import {useEffect, useState} from "react";
import styles from "../styles/Products.module.css";
function Products() {
  const [colorPick, setColorPick] = useState();
  const colorClickHandler = (e) => {
    if (e.target.localName == "div") {
      setColorPick(e.target.parentNode.innerText)
    } else {
      setColorPick(e.target.innerText)
    }
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("products/data.json").then((res) => setProducts(res.data));
  }, []);
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
              <p>رنگ ها :</p>
              {i.colors.map((item, index) => (
                <li key={index} onClick={colorClickHandler} className={colorPick == item.namecolor ? styles.active : null}>
                  <p>{item.namecolor}</p>
                  <div style={{backgroundColor: item.code}}></div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Products;
