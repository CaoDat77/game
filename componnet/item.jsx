import { Row, Col } from "react-bootstrap";
import styles from "../styles/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectCart } from "../store/features/cart/cart.slice";
import { addItem } from "../store/features/cart/cart.slice";
import ButtonBlack from "../componnet/ButtonBlack";
import React from "react";



import "react-toastify/dist/ReactToastify.css";

function Product({ product }) {
  const dispatch = useDispatch();
  

  const handleAddToCart = () => {  
    dispatch(addItem({ productId: product.id, quantity: 1 }));
  };

  return (
    <div className={styles.mB15}>
      <div className={styles.cart}>
        <Link
          className={styles.view}
          href={{
            pathname: "/products/[gid]",
            query: { gid: product.id },
          }}
        >
          <img className={styles.image} src={product.image} alt="" />
        </Link>

        <div className={styles.molda}>
          <div className={styles.hoveritem}>
            <div className="">
              <span className={styles.add} onClick={handleAddToCart}>
                ADD TO CART
                <p className={styles.line}></p>
              </span>
              <Link
                className={styles.view}
                href={{
                  pathname: "/products/[gid]",
                  query: { gid: product.id },
                }}
              >
                <p className={styles.nonePd}>VIEW DETAIL</p>

                <p className={styles.line}></p>
              </Link>
            </div>

            <div className=""></div>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
      <div className={styles.mobile}>
        <div className={styles.info}>
          <p className={styles.name}>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <span onClick={handleAddToCart}>
          <ButtonBlack text="ADD TO CART" />
        </span>
      </div>
    </div>
  );
}

export default Product;
