import { priceFormat } from "../helper/helper";
import styles from "../styles/Card.module.css";
import {Link} from "react-router-dom";
function Card({data: {id, title, images, colors}}) {
  return (
    <>
      <Link className={styles.link} to={`/products/${id}`}>
        <div className={styles.card}>
          <img className={styles.bgimage} src={images[0]} alt={title}></img>
          <h1>{title}</h1>
          <p>{priceFormat(colors[0].price)}</p>
        </div>
      </Link>
    </>
  );
}
export default Card;
