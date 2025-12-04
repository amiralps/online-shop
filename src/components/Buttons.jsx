import styles from "../styles/Buttons.module.css";
import {
  TbShoppingCartDown,
} from "react-icons/tb";
import { FaPlus, FaMinus, } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";

import {
  removeItem,
  addItem,
  increment,
  decrement,
} from "../features/cart/cartSlice.js";
function Buttons({data: {colorPick, thisCart, dispatch, product}}) {
  return (
    <div className={`${styles.buttons} updateButtons`}>
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
        <FaPlus className={styles.increase} />
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
        <FaMinus className={styles.decrease} />
        <LuTrash2 className={styles.remove} />
      </button>
    </div>
  );
}
export default Buttons;
