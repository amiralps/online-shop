import { useEffect } from "react";
import { changeTitle } from "../helper/helper";
import styles from "../styles/NotFound.module.css"

function NotFound() {
  useEffect(() => {
    changeTitle("یافت نشد");
  }, []);
  return (
	<div className={styles.notFound}>
		<h1>404</h1>
		<h3>صفحه یافت نشد!</h3>
	</div>
  )
}
export default NotFound