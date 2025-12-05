import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/ShoppingCart.module.css";
import Buttons from "../components/Buttons";
import {useEffect} from "react";
import { changeTitle } from "../helper/helper";

function ShoppingCart() {
  useEffect(() => {
    changeTitle("سبد خرید");
  }, []);
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);
  const {
    checkOut: checkOutStatus,
    selectedItems: shoppingBox,
    itemsCounter,
    totalCount,
  } = useSelector((state) => state.cart);
  if (!shoppingBox.length)
    return (
      <div className={styles.empty}>
        <h1>هیچ محصولی در سبدتان وجود ندارد</h1>
      </div>
    );
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.pDetail}>
          {shoppingBox.map((item, itemIndex) =>
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
        <div>
          <div>
            <h1></h1>
            <p>مجموع : {totalCount}</p>
            <p>تعداد : {itemsCounter}</p>
            <p>وضعیت: {checkOutStatus ? "پرداخت شده" : "پرداخت نشده"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;
