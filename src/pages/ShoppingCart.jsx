import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/ShoppingCart.module.css";
import Buttons from "../components/Buttons";
import {Fragment, useEffect, useState} from "react";
import {changeTitle, priceFormat, resizeHandler} from "../helper/helper";
import {checkOut as doCheckOut} from "../features/cart/cartSlice";

function ShoppingCart() {
  const [isDesktop, setIsDesktop] = useState(resizeHandler());
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
  const {checkOut, selectedItems, totalCount} = useSelector(
    (state) => state.cart
  );
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
                <Fragment key={`${itemIndex + 1}${colorIndex + 1}`}>
                  <li>
                    <img src={item.images[0]} alt={item.title} />
                    <div className={styles.cartDTLBTN}>
                      <h1>{item.title}</h1>
                      <div className={styles.colorDiv}>
                        <span>رنگ : </span>
                        <div style={{background: color.code}}></div>
                        <p>{color.namecolor}</p>
                      </div>
                      <div className={styles.priceAndButtons}>
                        <Buttons
                          data={{
                            colorPick: colorIndex,
                            thisCart: item,
                            dispatch,
                            product: products.find((i) => i.id === item.id),
                          }}
                        />
                        <span>{priceFormat(color.price)}</span>
                      </div>
                    </div>
                  </li>
                  <div className={styles.break}></div>
                </Fragment>
              ) : (
                ""
              )
            )
          )}
        </ul>
        <div className={styles.checkOutField}>
          <button onClick={() => dispatch(doCheckOut())}>تکمیل سفارش</button>
          <div className={styles.price}>
            <p>جمع سبد خرید</p>
            <span>{priceFormat(totalCount)}</span>
          </div>
          {isDesktop && (
            <div>
              <p>وضعیت</p>
              <span>{checkOut ? "پرداخت شده" : "در انتظار پرداخت"}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;
