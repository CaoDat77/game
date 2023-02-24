import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Detail.module.css";
import Sologan from "../../componnet/Sologan";
import { style } from "@mui/system";
import Link from "next/link";
import { addItem } from "../../store/features/cart/cart.slice";
import { selectProductById } from "../../store/features/products/products.slice";
import ButtonBlack from "../../componnet/ButtonBlack";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { selectUser } from "../../store/features/auth/auth.slice";
const ItemDetail = ({ data }) => {
  const auth = getAuth(app);
  const user = useSelector(selectUser);
  const [cart, setCart] = React.useState([]);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const product = useSelector(selectProductById(data.id));

  const countUp = () => {
    setQuantity(quantity + 1);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity(quantitys - 1);
    }
    if (quantitys === 1) {
      return quantitys;
    }
  };

  // const handleAddToCartClick = (productId) => {
  //   dispatch(addItem({ productId: productId, quantity: quantitys }));
  // };
  // console.log(quantitys);
  // console.log(product);

  // add to cart
  const cartRef = collection(getFirestore(app), "store");

  React.useEffect(() => {
    const q = query(cartRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, [cartRef]);

  const handleAddtoCart = async (product) => {
    // check product exist
    const check = cart.filter(
      (item) => item.uid == user.uid && item.name == product.name
    );

    if (auth.currentUser) {
      if (check.length > 0) {
        const reference = doc(cartRef, check[0].id);
        await updateDoc(reference, {
          quantity: check[0].quantity + quantity,
        });
        toast.success(`${product.name} added to cart successfully`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const reference = doc(cartRef);
        await setDoc(reference, {
          uid: user.uid,
          productId: product.id,
          quantity: quantity,
          ...product,
        });

        toast.success(`${product.name} added to cart successfully`, {
          position: "top-right",
          autoClose: 22000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.warning(`You need to login to perform this function`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg} id="#">
        <h1
          style={{ color: "white", fontSize: "5rem", letterSpacing: "0.3rem" }}
        >
          SHOP / DETAIL
        </h1>
      </Container>
      <section className={styles.mtT80}>
        <Container>
          <Row className={styles.row} key={data.id}>
            <Col lg={5}>
              <img className={styles.img} src={data.image} alt="" />
            </Col>
            <Col lg={5}>
              <div className="">
                <h1 className={styles.name}>{data.name}</h1>
                <h2 className={styles.price}>${data.price}</h2>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, vidit adipiscing pri ne. Cum at
                  ornatus imperdiet persequeris. Eu movet facilis nam. Nihil
                  ignota principes ut vis, ullum nostrud ne pri.
                </p>
                <div className={styles.flex}>
                  <div className={styles.p}>
                    <p onClick={countDown}>-</p>
                    <p>{quantity}</p>
                    <p onClick={countUp}>+</p>
                  </div>
                  <div className="" onClick={() => handleAddtoCart(data)}>
                    <ButtonBlack text="ADD TO CART" />
                  </div>
                </div>

                <h3 className={styles.h3}>
                  CATEGORY : <i className={styles.cate}>{data.category}</i>{" "}
                </h3>

                <h3 className={styles.tag}>
                  TAGS :{"  "}
                  <i className={styles.cate}>
                    Furnishing, Hand made, Utilities
                  </i>
                </h3>

                <h3 className={styles.social}>
                  SHARE :{" "}
                  <i className={styles.link}>
                    <Link href="#">FB</Link>
                    <Link href="#">TW</Link>
                    <Link href="#">PIN</Link>
                  </i>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default ItemDetail;

//staticPath - Có bao nhiêu sản phẩm
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://63a72e867989ad3286eb9587.mockapi.io/products"
  );
  const data = await res.json();

  return {
    paths: data.map((item) => ({ params: { gid: item.id } })),
    fallback: false,
  };
};

// staticProps - thông tin cụ thể 1 sản phẩm là gì
export const getStaticProps = async (context) => {
  const productId = context.params.gid;

  const res = await fetch(
    "https://63a72e867989ad3286eb9587.mockapi.io/products/" + productId
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
