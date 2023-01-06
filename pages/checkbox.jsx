import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Checkbox.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Sologan from "../componnet/Sologan";
import { style } from "@mui/system";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { selectCart } from "../store/features/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import ButtonBlack from "../componnet/ButtonBlack";

function CheckBox() {
  const { items, totalPrice } = useSelector(selectCart);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      textarea: "",
      name: "",
      email: "",
    },
  });

  const text = register("city", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 80) ||
        "Please enter your city",
    },
  });

  const first = register("first", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your first name",
    },
  });

  const last = register("last", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your first name",
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
        <Container>
          <Sologan text="CART / CHECKOUT" />
        </Container>
      </Container>

      <section className={styles.mT80}>
        <Container>
          <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
            <Row>
              <Col lg={6}>
                <h2>BILLING DETAILS</h2>
                <div className={styles.form}>
                  <div className="">
                    <div className="">
                      <label htmlFor="first"> First name *</label>
                      <input {...first} type="text" name="first" />
                    </div>
                    <p className={styles.error}> {errors.first?.message}</p>
                  </div>

                  <div className="">
                    <div className="">
                      <label htmlFor="last"> Last name *</label>
                      <input {...last} type="text" name="last" />
                    </div>
                    <p className={styles.error}> {errors.first?.message}</p>
                  </div>

                  <div className="">
                    <div className="">
                      <label htmlFor="Company">Company name (optional)</label>
                      <input type="text" name="Company" />
                    </div>
                  </div>

                  <div className="">
                    <div className="">
                      <label htmlFor="city">Town / City *</label>
                      <input {...text} type="text" name="city" />
                      <p className={styles.error}> {errors.text?.message}</p>
                    </div>
                  </div>

                  <div className="">
                    <div className="">
                      <label htmlFor="address">Street address *</label>
                      <input type="text" name="address" />
                    </div>
                    <p className={styles.error}> {errors.text?.message}</p>
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
                <form className="">
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
                </form>

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

                  {items.map((item) => (
                    <Row className={styles.line} key={item.id}>
                      <Col lg={8} xs={8}>
                        <p className={styles.text}>
                          {item.product.name} × {item.quantity}
                        </p>
                      </Col>
                      <Col lg={4} xs={4}>
                        <p className={styles.text}>
                          ${item.product.price * item.quantity}
                        </p>
                      </Col>
                    </Row>
                  ))}
                  <Row>
                    <Col lg={8} xs={8}>
                      <p className={styles.total}>TOTAL</p>
                    </Col>
                    <Col lg={4} xs={4}>
                      <p className={styles.price}>${totalPrice}</p>
                    </Col>
                  </Row>

                  <Row>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Row>
                </div>
              </Col>
            </Row>
            <ButtonBlack text="PLACE ORDER" />
          </form>

          {isSubmitSuccessful ? (
            <div className={styles.formMessage}>
              Thank you for your message. It has been sent.
            </div>
          ) : (
            ""
          )}
        </Container>
      </section>
    </Container>
  );
}

export default CheckBox;
