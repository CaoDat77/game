import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Detail.module.css";
import Sologan from "../componnet/Sologan";
import { style } from "@mui/system";

import Link from "next/link";
import { addItem } from "../../store/features/cart/cart.slice";
import { toast } from "react-toastify";
import { selectProductById } from "../../store/features/products/products.slice";
import ButtonBlack from "../componnet/ButtonBlack";
const ItemDetail = ({ data }) => {
  const dispatch = useDispatch();
  const [quantitys, setQuantity] = React.useState(1);
  const product = useSelector(selectProductById(data.id));

  const countUp = () => {
    setQuantity(quantitys + 1);
  };

  const countDown = () => {
    if (quantitys > 1) {
      setQuantity(quantitys - 1);
    }
    if (quantitys === 1) {
      return quantitys;
    }
  };

  const handleAddToCartClick = (productId) => {
    dispatch(addItem({ productId: productId, quantity: quantitys }));
    // setSearchText({ data });
    // console.log(searchText);
  };
  console.log(quantitys);
  console.log(product);

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg} id="#">
        <Sologan text="SHOP / DETAIL" />
      </Container>
      <section className={styles.mtT80}>
        <Container>
          <Row className={styles.row} key={data.id}>
            <Col lg={5}>
              <img className={styles.img} src={data.image} alt="" />
            </Col>
            <Col lg={5}>
              <div className="">
                <h1>{data.name}</h1>
                <h2>${data.price}</h2>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, vidit adipiscing pri ne. Cum at
                  ornatus imperdiet persequeris. Eu movet facilis nam. Nihil
                  ignota principes ut vis, ullum nostrud ne pri.
                </p>
                <div className={styles.flex}>
                  <div className={styles.p}>
                    <p onClick={countDown}>-</p>
                    <p>{quantitys}</p>
                    <p onClick={countUp}>+</p>
                  </div>
                  <div
                    className=""
                    onClick={() => handleAddToCartClick(data.id)}
                  >
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
  const res = await fetch("http://localhost:3002/products");
  const data = await res.json();

  return {
    paths: data.map((item) => ({ params: { gid: String(item.id) } })),
    fallback: false,
  };
};

// staticProps - thông tin cụ thể 1 sản phẩm là gì
export const getStaticProps = async (context) => {
  const productId = context.params.gid;

  const res = await fetch("http://localhost:3002/products/" + productId);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
