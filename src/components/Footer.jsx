import {Link} from "react-router-dom";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.company}>
          <h1>عینک اپتیک</h1>
          <p>
            در این سایت شما میتونید بدون واسطه و با اطمینان کامل و تضمین سلامت
            کالا خریدتون رو انجام بدید ، همچنین در صورت مغایرت یا خرابی ، کالا
            را مرجوع کنید
          </p>
        </div>
        <div className={styles.links}>
          <h3>راهنمای سایت</h3>
          <ul>
            <li>
              <Link to={"/"}>خانه</Link>
            </li>
            <li>
              <Link to={"/products"}>محصولات</Link>
            </li>
            <li>
              <Link to={"/shopping-cart"}>سبد خرید</Link>
            </li>
            <li>
              <Link to={"/"}>علاقه مندی</Link>
            </li>
          </ul>
        </div>
        <div className={styles.aboutUs}>
          <h3>تماس با ما</h3>
          <ul>
            <li>
              <Link to={"tel:09991111213"}>تماس</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.tag}>
        <h4>designed by AmirAlps</h4>
      </div>
    </footer>
  );
}
export default Footer;
