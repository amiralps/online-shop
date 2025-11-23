import styles from "../styles/cards.module.css";
import {Link} from "react-router-dom";
function Card({data: {id, title, images, description}, data}) {
  return (
    <>
      <Link className={styles.link} to={`/products/${id}`}>
        <div
          className={styles.card}
          style={{backgroundImage: `url(${images[0]})`}}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
}
export default Card;
