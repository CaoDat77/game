import { selectCart } from "../store/features/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { style } from "@mui/system";
import styles from "../styles/Cart.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sologan from "../componnet/Sologan";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBlack from "../componnet/ButtonBlack";
import Link from "next/link";
import React, { useState } from "react";
import { selectUser } from "../store/features/auth/auth.slice";
import { getAuth } from "firebase/auth";
import { app } from "../lib/firebase";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
function Cart() {
  const user = useSelector(selectUser);
  const [carts, setCart] = React.useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const auth = getAuth(app);
  const cartRef = collection(getFirestore(app), "store");
  React.useEffect(() => {
    const q = query(cartRef);
    const cartlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });

    return () => cartlist();
  }, [user == null ? null : user.uid]);

  const handleRemoveItem = async (id) => {
    toast.success(`Remove succesfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const incrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: quantity + 1,
    });
  };

  const decrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: Math.max(quantity - 1, 1),
    });
  };

  const deleteAll = async (id) => {
    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const clearCart = () => {
    carts.forEach((item) => deleteAll(item.id));
  };

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <h1
          style={{
            color: "white",
            fontSize: "5rem",
            letterSpacing: "0.3rem",
          }}
        >
          CART
        </h1>
      </Container>
      <section className={styles.mT80}>
        <Container>
          {auth.currentUser && carts.length === 0 ? (
            <div></div>
          ) : (
            <Row className={styles.line}>
              <Col lg={2} xs={1}>
                <p></p>
              </Col>
              <Col lg={5} xs={7}>
                <p className={styles.th}>PRODUCT</p>
              </Col>

              <Col lg={1} className={styles.none}>
                <p className={styles.th}>PRICE</p>
              </Col>

              <Col lg={2} xs={3}>
                <p className={styles.th}>QUANTITY</p>
              </Col>

              <Col lg={2} className={styles.none}>
                <p className={styles.th}>SUBTOTAL</p>
              </Col>
            </Row>
          )}
          {auth.currentUser && carts.length === 0 ? (
            <div className={styles.empty}>
              <h1>YOUR CART IS CURRENTLY EMPTY.</h1>
              <Link href="/products">
                <ButtonBlack text="RETURN TO SHOP" />
              </Link>
            </div>
          ) : (
            carts.map((item) => (
              <Row className={styles.center} key={item.id}>
                <Col lg={2} xs={1}>
                  <Row className="">
                    <Col lg={4} xs={12} className={styles.delete}>
                      <div
                        onClick={() => {
                          Swal.fire({
                            title: "Do you want to delete the product?",
                            icon: "question",
                            iconHtml: "?",
                            confirmButtonText: "Yes",
                            cancelButtonText: "No",
                            showCancelButton: true,
                            showCloseButton: true,
                            width: "50rem",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleRemoveItem(item.id);
                            }
                          });
                        }}
                      >
                        <CloseIcon />
                      </div>
                    </Col>
                    <Col lg={8} className={styles.none}>
                      <img className={styles.image} src={item.image} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col lg={5} xs={7}>
                  <p className={styles.name}>{item.name}</p>
                </Col>

                <Col lg={1} className={styles.none}>
                  <p className={styles.price}>${item.price}</p>
                </Col>

                <Col lg={2} xs={4} className={styles.quantity}>
                  <p
                    onClick={() => {
                      decrementCart(item.id, item.quantity);
                    }}
                  >
                    -
                  </p>
                  <p>{item.quantity}</p>
                  <p
                    onClick={() => {
                      incrementCart(item.id, item.quantity);
                    }}
                  >
                    +
                  </p>
                </Col>

                <Col className={styles.none}>
                  <p className={styles.price}>${item.price * item.quantity}</p>
                </Col>
              </Row>
            ))
          )}

          {auth.currentUser && carts.length === 0 ? (
            <div></div>
          ) : (
            <div className="">
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Do you want to remove all products?",
                    icon: "question",
                    iconHtml: "?",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    showCancelButton: true,
                    showCloseButton: true,
                    width: "50rem",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: " Remove Success",
                        showConfirmButton: false,
                        timer: 1500,
                        icon: "success",
                        width: "50rem",
                      });
 clearCart();
                    }
                   
                  });
                }}
                className={styles.btnAll}
              >
                REMOVE ALL
              </button>
              <h1 className={styles.cart}>CART TOTALS</h1>
              <Row className={styles.center}>
                <Col lg={4} className={styles.mT20}>
                  <p className={styles.total}>TOTAL</p>
                </Col>
                <Col lg={8} className={styles.mT20}>
                  <p className={styles.money}>
                    $
                    {carts.reduce((total, cur) => {
                      return (total += cur.price * cur.quantity);
                    }, 0)}{" "}
                  </p>
                </Col>
              </Row>
              <Link href="checkbox">
                <ButtonBlack text="PROCEED TO CHECKOUT" />
              </Link>
            </div>
          )}
        </Container>
      </section>
    </Container>
  );
}

export default Cart;
