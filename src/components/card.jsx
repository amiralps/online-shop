import styles from "../styles/cards.module.css";
import {Link} from "react-router-dom";
function Card({data: {id, title, images, description}}) {
  return (
    <>
      <Link className={styles.link} to={`/products/${id}`}>
        <div className={styles.card}>
          <img className={styles.bgimage} src={images[0]} alt={title}></img>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
}
export default Card;
