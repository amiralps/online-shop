import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/ShoppingCart.module.css";
import Buttons from "../components/Buttons";
import {useEffect, useState} from "react";
import {changeTitle, priceFormat, resizeHandler} from "../helper/helper";
import {checkOut} from "../features/cart/cartSlice";

function ShoppingCart() {
  const [isDesktop, setIsDesktop] = useState(resizeHandler())
  useEffect(() => {
    changeTitle("سبد خرید");
    window.addEventListener("resize", () => {
      setIsDesktop(resizeHandler());
    });
    return window.removeEventListener("resize", () => {
      setIsDesktop(resizeHandler());
    });
  }, []);
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);
  const {
    checkOut,
    selectedItems,
    totalCount,
  } = useSelector((state) => state.cart);
  if (!selectedItems.length)
    return (
      <div className={styles.empty}>
        <h1>هیچ محصولی در سبدتان وجود ندارد</h1>
      </div>
    );
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.pDetail}>
          {selectedItems.map((item, itemIndex) =>
            item.colors.map((color, colorIndex) =>
              color?.quantity ? (
                <li key={`${itemIndex + 1}${colorIndex + 1}`}>
                  <img src={item.images[0]} alt={item.title} />
                  <div className={styles.cartDTLBTN}>
                    <h1>{item.title}</h1>
                    <div className={styles.colorDiv}>
                      <span>رنگ : </span>
                      <div style={{background: color.code}}></div>
                      <p>{color.namecolor}</p>
                    </div>
                    <Buttons
                      data={{
                        colorPick: colorIndex,
                        thisCart: item,
                        dispatch,
                        product: products.find((i) => i.id === item.id),
                      }}
                    />
                  </div>
                </li>
              ) : (
                ""
              )
            )
          )}
        </ul>
        <div className={styles.checkOutField}>
          <button onClick={() => dispatch(checkOut())}>تکمیل سفارش</button>
          <p className={styles.price}>
            جمع سبد خرید : <span>{priceFormat(totalCount)}</span>
          </p>
          {isDesktop && <p>وضعیت : {checkOut ? "پرداخت شده" : "در انتظار پرداخت"}</p>}
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;
