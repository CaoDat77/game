import styles from "../styles//Account.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../lib/firebase";
import { selectUser } from "../store/features/auth/auth.slice";
import Link from "next/link";
import { Col, Row, Container } from "react-bootstrap";
function Account() {
  const [bill, setBill] = useState([]);

  const checkoutRef = collection(getFirestore(app), "checkout");
  const router = useRouter();

  const user = useSelector(selectUser);
  const auth = getAuth(app);

  useEffect(() => {
    const q = query(checkoutRef);
    const pay = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setBill(data.filter((item) => item.uid == (user && user.uid)));
    });

    console.log(user);
    return () => pay();
  }, [user == null ? null : user.uid]);

  return (
    <div className="">
      <div className={styles.bg}>
        <h1
          style={{ color: "white", fontSize: "5rem", letterSpacing: "0.3rem" }}
        >
          ACCOUNT
        </h1>
      </div>
      <Container className={styles.content}>
        {auth.currentUser ? (
          <div className="">
            <div className="h1">My Account</div>
            <div className={styles.info}>
              <div className="">
                <p className={styles.input}>Email : {user && user.email} </p>
                {user.displayName === null ? (
                  ""
                ) : (
                  <p className={styles.input}>
                    Name : {user && user.displayName}
                  </p>
                )}
              </div>
            </div>
            <h2 style={{ marginTop: "2rem" }}> Order History</h2>
            {user && bill.length !== 0 ? (
              <Container className={styles.container}>
                <Row className={styles.th}>
                  <Col xs={3}>
                    <h2>Date</h2>
                  </Col>
                  <Col xs={6}>
                    <h2>Product</h2>
                  </Col>

                  <Col xs={3}>
                    <h2>Total Payment</h2>
                  </Col>
                </Row>

                {bill.map((item, index) => {
                  return (
                    <Row key={index} className={styles.item}>
                      <Col xs={3}>
                        <div>{item.date}</div>
                      </Col>

                      <Col xs={6}>
                        {item.bill.map((product, index) => {
                          return (
                            <div key={index}>
                              {product.name} x {product.quantity}
                            </div>
                          );
                        })}
                      </Col>
                      <Col xs={3}>{item.total}$</Col>
                    </Row>
                  );
                })}
                <Row>
                  <Col xs={3}>
                    {bill.map((item, index) => {
                      return <div key={index}>{item.date}</div>;
                    })}
                  </Col>

                  <Col xs={6}>
                    {bill.map((item) => {
                      return item.bill.map((product, index) => {
                        return <div key={index}>{product.name}</div>;
                      });
                    })}
                  </Col>
                </Row>
              </Container>
            ) : (
              <div>
                <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
                  You haven`t placed any orders yet.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1>Already have an account? </h1>
            <Link href="/login" style={{ fontSize: "1.6rem" }}>
              Log in
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
export default Account;
