import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Detail.module.css";
import Sologan from "../componnet/Sologan";
import { style } from "@mui/system";
import ButtonBlack from "../componnet/ButtonBlack";
import Link from "next/link";
import { addItem } from "../../store/features/cart/cart.slice";
import { toast } from "react-toastify";
const ItemDetail = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg} id="#">
        <Sologan text="SHOP / DETAIL" />
      </Container>
      <section className={styles.mtT80}>
        <Container>
          {data.map((item) => (
            <Row className={styles.row} key={item.id}>
              <Col lg={5}>
                <img className={styles.img} src={item.image} alt="" />
              </Col>
              <Col lg={5}>
                <div className="">
                  <h1>{item.name}</h1>
                  <h2>${item.price}</h2>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet, vidit adipiscing pri ne. Cum at
                    ornatus imperdiet persequeris. Eu movet facilis nam. Nihil
                    ignota principes ut vis, ullum nostrud ne pri.
                  </p>

                  <Button
                    type="button"
                    onClick={
                      (() =>
                        dispatch(addItem({ productId: item.id, quantity: 1 })),
                      toast("Thêm sản phẩm vào giỏ hàng thành cmn công"))
                    }
                  >
                    ADD TO CART
                  </Button>
                  <h3 className={styles.h3}>
                    CATEGORY : <i className={styles.cate}>{item.category}</i>{" "}
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
          ))}
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
  console.log(data);

  return {
    paths: data.map((item) => ({ params: { gid: String(item.id) } })),
    fallback: false,
  };
};

// staticProps - thông tin cụ thể 1 sản phẩm là gì
export const getStaticProps = async (ctx) => {
  const { gid } = ctx.params;
  const res = await fetch("http://localhost:3002/id" + gid);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
