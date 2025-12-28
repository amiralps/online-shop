import {useEffect, useRef} from "react";
import {priceFormat} from "../helper/helper";
import styles from "../styles/Card.module.css";
import {Link} from "react-router-dom";
function Card({
  data: {
    item: {id, title, images, colors},
    isData,
  },
}) {
  const card = useRef(null);
  function scroller() {
    if (card.current) {
      // if (window.pageYOffset > 0) {
      //   sessionStorage.setItem("scrollPoint", window.pageYOffset);
      // }
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >
        card.current.offsetTop + card.current.offsetHeight - 80
      ) {
        card.current.classList.add(styles.opened);
      } else {
        card.current.classList.remove(styles.opened);
      }
    }
  }
  const directMotion = () => {
    if (card.current) {
      if (
        card.current.offsetLeft >
        document.documentElement.offsetWidth -
          (card.current.offsetLeft + card.current.offsetWidth)
      ) {
        card.current.classList.remove("right");
        card.current.classList.remove("left");
        card.current.classList.remove("center");
        card.current.classList.add("right");
      } else if (
        card.current.offsetLeft <
        document.documentElement.offsetWidth -
          (card.current.offsetLeft + card.current.offsetWidth)
      ) {
        card.current.classList.remove("right");
        card.current.classList.remove("left");
        card.current.classList.remove("center");
        card.current.classList.add("left");
      } else {
        card.current.classList.remove("right");
        card.current.classList.remove("left");
        card.current.classList.remove("center");
        card.current.classList.add("center");
      }
    }
  };
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
    directMotion();
    if (!isData) {
      const timer = setTimeout(() => {
        scroller();
        if (card.current) {
          card.current.style.transition = ".5s ease-in-out";
        }
        window.scrollTo({top: 0})
        clearTimeout(timer)
      }, 100);
    } else {
      scroller();
      const timer = setTimeout(() => {
        if (card.current) {
          card.current.style.transition = ".5s ease-in-out";
        }
        clearTimeout(timer)
      }, 0);
    }

    window.addEventListener("scroll", () => {
      scroller();
    });
    window.removeEventListener("scroll", () => {
      scroller();
    });
    window.addEventListener("resize", () => {
      directMotion();
      scroller();
    });
    window.removeEventListener("resize", () => {
      directMotion();
      scroller();
    });
    // document.documentElement.scrollTo({
    //   top: sessionStorage.getItem("scrollPoint"),
    // });
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
