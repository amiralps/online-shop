import {useDispatch, useSelector} from "react-redux";
import styles from "../styles/ShoppingCart.module.css";
import Buttons from "../components/Buttons";
import {Fragment, useEffect} from "react";
import {changeTitle, priceFormat, resizer} from "../helper/helper";
import {checkOut as doCheckOut} from "../features/cart/cartSlice";
import {Link} from "react-router-dom";
import {getProducts} from "../features/products/productSlice";
import Loading from "../components/Loading";

function ShoppingCart() {
  const dispatch = useDispatch();
  const isMobile = resizer();
  useEffect(() => {
    changeTitle("سبد خرید");
  }, []);
  const {products, loading, error} = useSelector((state) => state.products);
  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
      const timer = setTimeout(() => {
        window.scrollTo({top: 0})
        clearTimeout(timer)
      }, 200);
    }
  }, []);
  // console.log(products, loading, error)
  const {checkOut, selectedItems, totalCount} = useSelector(
    (state) => state.cart
  );
  if (loading || !products.length) return <Loading />;
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
                    <Link to={`/products/${item.id}`}>
                      <img src={item.images[0]} alt={item.title} />
                    </Link>
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
          {!isMobile && (
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
