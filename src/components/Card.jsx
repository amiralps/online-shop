import {useEffect, useRef} from "react";
import {priceFormat} from "../helper/helper";
import styles from "../styles/Card.module.css";
import {Link} from "react-router-dom";
function Card({data: {id, title, images, colors}}) {
  const card = useRef(null);
  function scroller() {
    if (
      window.pageYOffset + window.innerHeight >
      card.current.offsetTop + card.current.offsetHeight - 0
    ) {
      card.current.classList.add(styles.opened);
    } else {
      card.current.classList.remove(styles.opened);
    }
  }
  useEffect(() => {
    // console.dir(card.current)
    // console.log(
    //   "left : ",
    //   card.current.offsetLeft,
    //   ",",
    //   "right : ",
    //   document.documentElement.offsetWidth -
    //     (card.current.offsetLeft + card.current.offsetWidth)
    // );
    if (
      card.current.offsetLeft >
      document.documentElement.offsetWidth -
        (card.current.offsetLeft + card.current.offsetWidth)
    ) {
      card.current.classList.remove("right")
      card.current.classList.remove("left")
      card.current.classList.remove("center")
      card.current.classList.add("right");
    } else if (
      card.current.offsetLeft <
      document.documentElement.offsetWidth -
        (card.current.offsetLeft + card.current.offsetWidth)
    ) {
      card.current.classList.remove("right")
      card.current.classList.remove("left")
      card.current.classList.remove("center")
      card.current.classList.add("left")
    } else {
      card.current.classList.remove("right")
      card.current.classList.remove("left")
      card.current.classList.remove("center")
      card.current.classList.add("center")
    }
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
