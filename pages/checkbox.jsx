import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/CheckBox.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Sologan from "./componnet/Sologan";
import { style } from "@mui/system";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
function CheckBox() {
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

  const text = register("text", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
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
          <Row>
            <Col lg={6}>
              <h2>BILLING DETAILS</h2>
              <form
                action=""
                className={styles.form}
                onSubmit={handleSubmit((data) => console.log(data))}
              >
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
                    <input {...first} type="text" name="last" />
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

                <button>SEND MESSAGE</button>
              </form>
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
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default CheckBox;
