import {useEffect} from "react";
import {changeTitle} from "../helper/helper";
import styles from "../styles/Home.module.css";
function Home() {
  useEffect(() => {
    changeTitle("خانه");
  }, []);
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  );
}
export default Home;
