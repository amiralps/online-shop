import {useEffect} from "react";
import {changeTitle} from "../helper/helper";
import styles from "../styles/Home.module.css";
import MySunglasses from "../svg/MySunglasses";
function Home() {
  useEffect(() => {
    changeTitle("عینک اپتیک");
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <MySunglasses
          data={{
            duration: "6s",
            fill: "forwards",
            count: "infinite",
            ease: "linear",
            strokeWidth: "6",
          }}
        />
      </div>
      <div className={styles.text}>
        <h1>عینک اُپتیک</h1>
        <div className={styles.items}>
          <div>
            <span>زیبا</span>
            <span>مقاوم</span>
            <span>به صرفه</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
