import styles from "../styles/cards.module.css";
import {Link} from "react-router-dom";
function Card({data: {id, title, images, description}, data}) {
  return (
    <>
      <Link className={styles.link} to={`/products/${id}`}>
        <div className={styles.card}>
          <div
            className={styles.bgimage}
            style={{backgroundImage: `url(${images[0]})`}}></div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
}
export default Card;
