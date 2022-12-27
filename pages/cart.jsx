import { selectCart } from "../store/features/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { style } from "@mui/system";
import styles from "../styles/Cart.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sologan from "../componnet/Sologan";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBlack from "../componnet/ButtonBlack";
import Link from "next/link";
function Cart() {
  const dispatch = useDispatch();
  const {
    items,
    totalPrice,
    incQty,
    decQty,
    removeItem,
    clearItem,
    toJavaSrcipt,
  } = useSelector(selectCart);

  const handleDelete = (productId) => {
    if (confirm("Xoas sanr pham?")) {
      dispatch(removeItem(productId));
    }
  };

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <Container>
          <Sologan text="CART" />
        </Container>
      </Container>
      <section className={styles.mT80}>
        <Container>
          {items.length === 0 ? (
            <div></div>
          ) : (
            <Row className={styles.line}>
              <Col lg={2}>
                <p></p>
              </Col>
              <Col lg={5}>
                <p className={styles.th}>PRODUCT</p>
              </Col>

              <Col lg={1}>
                <p className={styles.th}>PRICE</p>
              </Col>

              <Col lg={2}>
                <p className={styles.th}>QUANTITY</p>
              </Col>

              <Col lg={2}>
                <p className={styles.th}>SUBTOTAL</p>
              </Col>
            </Row>
          )}

          {items.length === 0 ? (
            <div className={styles.empty}>
              <h1>YOUR CART IS CURRENTLY EMPTY.</h1>
              <Link href="/products">
                <ButtonBlack text="RETURN TO SHOP" />
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <Row className={styles.center} key={item.id}>
                <Col lg={2}>
                  <Row className="">
                    <Col lg={4} className={styles.delete}>
                      <div
                        onClick={() => {
                          handleDelete(item.product.id);
                        }}
                      >
                        <CloseIcon />
                      </div>
                    </Col>
                    <Col lg={8}>
                      <img
                        className={styles.image}
                        src={item.product.image}
                        alt=""
                      />
                    </Col>
                  </Row>
                </Col>

                <Col lg={5}>
                  <p className={styles.name}>{item.product.name}</p>
                </Col>

                <Col lg={1}>
                  <p className={styles.price}>${item.product.price}</p>
                </Col>

                <Col lg={2} className={styles.quantity}>
                  <p onClick={() => dispatch(decQty(item.product.id))}>-</p>
                  <p>{item.quantity}</p>
                  <p onClick={() => dispatch(incQty(item.product.id))}>+</p>
                </Col>

                <Col>
                  <p className={styles.price}>
                    ${item.product.price * item.quantity}
                  </p>
                </Col>
              </Row>
            ))
          )}

          {items.length === 0 ? (
            <div></div>
          ) : (
            <div className="">
              <h1 className={styles.mT80}>CART TOTALS</h1>
              <Row className={styles.center}>
                <Col lg={4} className={styles.mT20}>
                  <p className={styles.total}>TOTAL</p>
                </Col>
                <Col lg={8} className={styles.mT20}>
                  <p className={styles.money}>${totalPrice}</p>
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
