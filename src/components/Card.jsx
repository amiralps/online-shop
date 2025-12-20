import {useEffect, useRef} from "react";
import {priceFormat} from "../helper/helper";
import styles from "../styles/Card.module.css";
import {Link} from "react-router-dom";
function Card({data: {id, title, images, colors}}) {
  const card = useRef(null);
  function scroller() {
    if (
      window.pageYOffset + window.innerHeight >
      (card.current.offsetTop + card.current.offsetHeight) - 120
    ) {
      card.current.classList.add(styles.opened);
    } else {
      card.current.classList.remove(styles.opened);
    }
  }
  useEffect(() => {
    // console.log("left : ",card.current.parentElement.offsetLeft,"right : ", window.innerWidth - (card.current.parentElement.offsetLeft + card.current.parentElement.offsetWidth))
    // console.log(card.current)
    scroller();
    window.addEventListener("scroll", () => {
      scroller();
    });
    window.removeEventListener("scroll", () => {
      scroller();
    });
  }, []);
  return (
    <>
      <li ref={card} className={styles.li}>
        <Link className={styles.link} to={`/products/${id}`}>
          <div className={styles.card}>
            <img className={styles.bgimage} src={images[0]} alt={title}></img>
            <h1>{title}</h1>
            <p>{priceFormat(colors[0].price)}</p>
          </div>
        </Link>
      </li>
    </>
  );
}
export default Card;
