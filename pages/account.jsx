import { Container } from "react-bootstrap";
import styles from "../styles//Account.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";

function Account() {
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
        <div className="">
          <div className="h1">My Account</div>
          <div>
            <label className="">Email : </label>
            <input type="text" value="tiendat772001@gmail.com" />
          </div>
          <div>
            <label className="">Name : </label>
            <input type="text" value="Đạt Cao" />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Account;
