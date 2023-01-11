import { Row, Col } from "react-bootstrap";
import styles from "../styles/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { selectCart } from "../store/features/cart/cart.slice";
import { addItem } from "../store/features/cart/cart.slice";
import ButtonBlack from "../componnet/ButtonBlack";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../lib/firebase";
import { ToastContainer, toast } from "react-toastify";

function Product({ product }) {
  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);
  const [cart, setCart] = React.useState();
  const [count, setCount] = React.useState(1);
  console.log();

  const cartRef = collection(getFirestore(app), "store");

  const handleAddToCart = () => {
    dispatch(addItem({ productId: product.id, quantity: 1 }));
  };

  // React.useEffect(() => {
  //   console.log(items);
  // }, [items.length]);

  // React.useEffect(() => {
  //   const q = query(cartRef);
  //   const wishlist = onSnapshot(q, (querySnapshot) => {
  //     let data = [];
  //     querySnapshot.forEach((doc) => {
  //       data.push({ ...doc.data(), id: doc.id });
  //     });
  //     setCart(data.filter((item) => item));
  //   });
  //   return () => wishlist();
  // }, []);

  // const handleAddtoWishList = async () => {
  //   // console.log(cart);
  //   console.log(cart);
  //   const check = cart.filter((item) => item.name === product.name);

  //   console.log(check);

  //   if (check.length > 0) {
  //     const reference = doc(cartRef, check[0].id);
  //     await updateDoc(reference, {
  //       quantity: check[0].quantity + count,
  //     });
  //     toast.info(`${product.name} quanity++`, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   } else {
  //     const reference = doc(cartRef);
  //     setDoc(reference, {
  //       ...product,
  //       quantity: count,
  //     });
  //     toast.success(`${product.name} added to wish list successfully`, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };
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
