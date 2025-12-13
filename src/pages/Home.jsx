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
      <MySunglasses
        data={{
          duration: "6s",
          fill: "forwards",
          count: "infinite",
          ease: "linear",
          strokeWidth: "6"
        }}
      />
      <h1>عینک اُپتیک</h1>
    </div>
  );
}
export default Home;
