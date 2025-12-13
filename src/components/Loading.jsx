import styles from "../styles/Loading.module.css"
import MySunglasses from "../svg/MySunglasses"
function Loading() {
  return (
	<div className={styles.container}><MySunglasses
        data={{
          duration: "3s",
          fill: "forwards",
          count: "infinite",
          ease: "linear",
          strokeWidth: "12"
        }}
      /></div>
  )
}
export default Loading