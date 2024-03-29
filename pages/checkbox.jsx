import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Checkbox.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Sologan from "../componnet/Sologan";
import { style } from "@mui/system";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import ButtonBlack from "../componnet/ButtonBlack";
import { getAuth } from "firebase/auth";
import { selectUser } from "../store/features/auth/auth.slice";
import React from "react";
import { useRouter } from "next/router";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../lib/firebase";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function CheckBox() {
  const router = useRouter();
  const [carts, setCart] = React.useState([]);
  const auth = getAuth(app);
  const user = useSelector(selectUser);
  const cartRef = collection(getFirestore(app), "store");

  React.useEffect(() => {
    const q = query(cartRef);
    onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
  }, [user == null ? null : user.uid]);

  const date = () => {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      h = "" + d.getHours(),
      m = "" + d.getMinutes(),
      s = "" + d.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (h.length < 2) h = "0" + h;
    if (m.length < 2) m = "0" + m;
    if (s.length < 2) day = "0" + s;

    return [day, month, year].join("-") + " " + [h, m, s].join(":");
  };

  const total = carts.reduce((total, cur) => {
    return (total += cur.quantity * cur.price);
  }, 0);

  const deleteAll = async (id) => {
    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const clearCart = () => {
    carts.forEach((item) => deleteAll(item.id));
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {},
  });

  const city = register("city", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your city",
    },
  });

  const address = register("address", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (6 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your address",
    },
  });

  const first = register("first", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your name",
    },
  });

  const email = register("email", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  const phone = register("phone", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        isValidPhoneNumber(v) || "Please enter your phone number.",
    },
  });

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <h1 className={styles.h1}>CART / CHECKOUT </h1>
      </Container>

      <section className={styles.mT80}>
        {auth.currentUser /*&& carts.length != 0 */ ? (
          <Container>
            <form
              action=""
              onSubmit={handleSubmit((data) => {
                Swal.fire({
                  title: "Are you sure you want to order?",
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
                      title: " Order Success",
                      showConfirmButton: false,
                      timer: 1500,
                      icon: "success",
                      width: "50rem",
                    });
                    const reference = collection(getFirestore(app), "checkout");
                    const bill = {
                      uid: user == null ? null : user.uid,
                      infor: data,
                      bill: carts,
                      date: date(),
                      total: total,
                    };
                    addDoc(reference, bill).catch(console.error);
                    clearCart();
                    router.push("/cart");
                  }
                });
              })}
            >
              <Row>
                <Col lg={6}>
                  <h2>BILLING DETAILS</h2>
                  <div className={styles.form}>
                    <div className="">
                      <div className="">
                        <label htmlFor="first"> Your name </label>
                        <input {...first} type="text" name="first" />
                      </div>
                      <p className={styles.error}> {errors.first?.message}</p>
                    </div>

                    <div className="">
                      <div className="">
                        <label htmlFor="Company">Company name (optional)</label>
                        <input type="text" name="Company" />
                      </div>
                    </div>

                    <div className={styles.address}>
                      <div className="" style={{ margin: 0 }}>
                        <div className="" style={{ marginTop: "0" }}>
                          <label htmlFor="city">Town / City</label>
                          <input {...city} type="text" name="city" />
                        </div>
                        <p className={styles.error}> {errors.city?.message}</p>
                      </div>

                      <div className="" style={{ margin: 0 }}>
                        <div className="" style={{ marginTop: "0" }}>
                          <label htmlFor="address">Street address</label>
                          <input {...address} type="text" name="address" />
                        </div>
                        <p className={styles.error}>
                          {" "}
                          {errors.address?.message}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <div className="">
                        <label htmlFor="phone">Phone *</label>
                        <input
                          {...phone}
                          type="text"
                          name="phone"
                          placeholder="+84"
                        />
                      </div>
                      <p className={styles.error}> {errors.phone?.message}</p>
                    </div>

                    <div className="">
                      <div className="">
                        <label htmlFor="email">Email address *</label>
                        <input {...email} type="email" name="email" />
                      </div>
                      <p className={styles.error}> {errors.email?.message}</p>
                    </div>
                    <div className="">
                      <div className="">
                        <label htmlFor="visa">Visa Card</label>
                        <input
                          type="text"
                          className="input"
                          name="visa"
                          placeholder=""
                          {...register("visanumber", {
                            required: "Please enter this field!",
                            pattern: {
                              value:
                                /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                              message: "This field must be visa number!",
                            },
                          })}
                        />
                      </div>
                      {errors.visanumber && (
                        <div className={styles.error}>
                          {errors.visanumber.message}
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <h2>ADDITIONAL INFORMATION</h2>

                  <div className={styles.right}>
                    <label htmlFor="text" className={styles.note}>
                      Order notes (optional)
                    </label>
                    <textarea
                      className={styles.textarea}
                      type="text"
                      name="text"
                    />
                  </div>

                  <h2 className={styles.mT20}>YOUR ORDER</h2>
                  <div>
                    <Row className={styles.line}>
                      <Col lg={8} xs={8}>
                        PRODUCT
                      </Col>
                      <Col lg={4} xs={4}>
                        SUBTOTAL
                      </Col>
                    </Row>

                    {carts.map((item) => {
                      return (
                        <Row className={styles.line} key={item.id}>
                          <Col lg={8} xs={8}>
                            <p className={styles.text}>
                              {item.name} × {item.quantity}
                            </p>
                          </Col>
                          <Col lg={4} xs={4}>
                            <p className={styles.text}>
                              ${item.price * item.quantity}
                            </p>
                          </Col>
                        </Row>
                      );
                    })}

                    <Row>
                      <Col lg={8} xs={8}>
                        <p className={styles.total}>TOTAL</p>
                      </Col>
                      <Col lg={4} xs={4}>
                        <p className={styles.price}>
                          $
                          {carts.reduce((total, curren) => {
                            return (total += curren.quantity * curren.price);
                          }, 0)}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <ButtonBlack text="PLACE ORDER" />
            </form>
          </Container>
        ) : (
          <></>
        )}
      </section>
    </Container>
  );
}

export default CheckBox;
