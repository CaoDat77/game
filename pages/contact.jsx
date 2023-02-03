import styles from "../styles/Contact.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Sologan from "../componnet/Sologan";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

function Contact() {
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
  });

  const name = register("name", {
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

  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <h1
          style={{ fontSize: "5rem", color: "white", letterSpacing: "0.3rem" }}
        >
          CONTACT US
        </h1>
      </Container>
      <Container>
        <section className={styles.mgT80}>
          <Row>
            <Col lg={5} xs={12}>
              <div className={styles.pdB20}>
                <h2 className={styles.h2}>WE ARE HERE</h2>
                <p className={styles.contactText}>
                  Ac placerat vestibulum lectus mau ris ultrices. Et egestas
                  quis ipsum su spendisse ultrices gravida um fusce. Sit amet
                  est placerat in. Mae cenas ultricies mi eget mauris. Fames ac
                  turpis egestas maecas pharetra.
                </p>
                <div className={styles.social}>
                  <p className={styles.socials}>SOCIALS</p>
                  <Link href="/">FB</Link>
                  <Link href="/">TW</Link>
                  <Link href="/">PIN</Link>
                </div>
              </div>
            </Col>
            <Col lg={7} xs={12}>
              <form
                onSubmit={handleSubmit((data) => console.log(data))}
                className={styles.form}
              >
                <textarea
                  className={styles.textarea}
                  id=""
                  placeholder="Your message*"
                  {...text}
                ></textarea>
                <div className={styles.error}> {errors.text?.message}</div>
                <div className={styles.name}>
                  <Col lg={6} xs={12}>
                    <input {...name} type="text" placeholder="Your name" />
                    <div className={styles.error}> {errors.name?.message}</div>
                  </Col>
                  <Col lg={6} xs={12}>
                    <input {...email} type="email" placeholder="Your email" />
                    <div className={styles.error}> {errors.email?.message}</div>
                  </Col>
                </div>
                <button className={styles.button}>SEND MESSAGE</button>

                {isSubmitSuccessful ? (
                  <div className={styles.formMessage}>
                    Thank you for your message. It has been sent.
                  </div>
                ) : (
                  ""
                )}
              </form>
            </Col>
          </Row>
        </section>

        <section className={styles.mgT80}>
          <Row>
            <Col xs={12} lg={3}>
              <div className={styles.item}>
                <img
                  className={styles.img}
                  src="/contact/contact-2.jpg"
                  alt=""
                />
                <p className={styles.nameOff}>COPENHAGEN OFFICE</p>
                <div className={styles.infos}>
                  <p>Headquarters</p>
                  <p>Tel +45 66 23 14 04</p>
                  <p>Hylkedamvey 77-79</p>
                </div>
                <p className={styles.mail}>INFO@EXAMPLE.COM</p>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className={styles.item}>
                <img
                  className={styles.img}
                  src="/contact/contact-3.jpg"
                  alt=""
                />
                <p className={styles.nameOff}>AARHUS OFFICE</p>
                <div className={styles.infos}>
                  <p>Headquarters</p>
                  <p>Tel +45 66 23 14 04</p>
                  <p>Hylkedamvey 77-79</p>
                </div>
                <p className={styles.mail}>INFO@EXAMPLE.COM</p>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className={styles.item}>
                <img
                  className={styles.img}
                  src="/contact/contact-4.jpg"
                  alt=""
                />
                <p className={styles.nameOff}>ODENSE OFFICE</p>
                <div className={styles.infos}>
                  <p>Headquarters</p>
                  <p>Tel +45 66 23 14 04</p>
                  <p>Hylkedamvey 77-79</p>
                </div>
                <p className={styles.mail}>INFO@EXAMPLE.COM</p>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className={styles.item}>
                <img
                  className={styles.img}
                  src="/contact/contact-5.jpg"
                  alt=""
                />
                <p className={styles.nameOff}>ESBJERG OFFICE</p>
                <div className={styles.infos}>
                  <p>Headquarters</p>
                  <p>Tel +45 66 23 14 04</p>
                  <p>Hylkedamvey 77-79</p>
                </div>
                <p className={styles.mail}>INFO@EXAMPLE.COM</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Contact;
