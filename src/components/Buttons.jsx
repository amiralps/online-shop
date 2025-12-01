import styles from "../styles/Buttons.module.css";
import {
  TbShoppingCartPlus,
  TbShoppingCartMinus,
  TbShoppingCartX,
  TbShoppingCartDown,
} from "react-icons/tb";
import {
  removeItem,
  addItem,
  increment,
  decrement,
} from "../features/cart/cartSlice.js";
function Buttons({data: {colorPick, thisCart, dispatch, product}}) {
  return (
    <div className={styles.buttons}>
      {/* add and increase */}
      <button
        className={`${styles.putBtn}${
          thisCart?.colors[colorPick]?.quantity ? ` ${styles.active}` : ""
        }`}
        onClick={() => {
          !thisCart?.colors[colorPick].quantity
            ? dispatch(addItem({data: product, colorIndex: colorPick}))
            : dispatch(increment({data: product, colorIndex: colorPick}));
        }}>
        <div className={styles.add}>
          <p>افزودن به سبد</p>
          <TbShoppingCartDown />
        </div>
        <TbShoppingCartPlus className={styles.increase} />
      </button>
      <h2>{thisCart?.colors[colorPick]?.quantity || 0}</h2>
      {/* decrease and remove */}
      <button
        className={`${styles.popBtn}${
          thisCart?.colors[colorPick]?.quantity &&
          thisCart?.colors[colorPick]?.quantity <= 1
            ? ` ${styles.active}`
            : thisCart?.colors[colorPick]?.quantity > 1
            ? ` ${styles.active} ${styles.morethan1}`
            : ""
        }`}
        onClick={() => {
          thisCart?.colors[colorPick]?.quantity > 1
            ? dispatch(decrement({data: product, colorIndex: colorPick}))
            : dispatch(removeItem({data: product, colorIndex: colorPick}));
        }}>
        <TbShoppingCartMinus className={styles.decrease} />
        <TbShoppingCartX className={styles.remove} />
      </button>
    </div>
  );
}
export default Buttons;
