import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Footer.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  return (
    <Container fluid className={styles.bg}>
      <Container>
        <Row className={styles.content}>
          <Col lg={3} xs={12} className={styles.textCenter}>
            <h6 className={styles.h6}>INFORMATION</h6>
            <ul className={styles.ul}>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="/about">OUR TEAM</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
              <li>
                <Link href="/">PRICING PLANS</Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} xs={12} className={styles.textCenter}>
            <h6 className={styles.h6}>SOCIAL</h6>
            <ul className={styles.ul}>
              <li>
                <Link href="https://www.instagram.com/qodeinteractive/">
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/qodeinteractive/">
                  TWITTER
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/qodeinteractive/">
                  BEHANCE
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/qodeinteractive/">
                  PINTEREST
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/qodeinteractive/">
                  DRIBBBLE
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} xs={12} className={styles.textCenter}>
            <h6 className={styles.h6}>CONTACT</h6>
            <ul className={styles.ul}>
              <li>
                <Link href="https://www.google.com/maps/place/Copenhagen+Design+House/@55.6496107,12.4612629,10.47z/data=!4m5!3m4!1s0x465253af4a27ac6b:0x63b06d91ae2b36d2!8m2!3d55.6813808!4d12.5879377">
                  HEADQUARTERS
                </Link>
              </li>
              <li>TEL + 45 66 12 00 12</li>
              <li>INFO@QODEINTERACTIVE.DK</li>
              <li>BREDGADE 6, 1260</li>
              <li>KØBENHAVN, DK</li>
            </ul>
          </Col>
          <Col lg={4} xs={12} className={styles.textCenter}>
            <div>
              <div className={styles.center}>
                <p className={styles.inputText}>JOIN OUR NEWSLETTER</p>
                <form
                  className={styles.form}
                  onSubmit={handleSubmit((data) => console.log(data))}
                >
                  <div className={styles.form}>
                    <div className={styles.flex}>
                      <input
                        {...register("email", {
                          required: "Please fill out this field.",
                          validate: {
                            isEmail: (v) =>
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                                v
                              ) || "Please enter an email address.",
                          },
                        })}
                        className={styles.input}
                        type="email"
                        placeholder="Your Email"
                      />
                      <button className={styles.button}>SEND</button>
                    </div>
                    {isSubmitSuccessful ? (
                      <div className={styles.succses}>
                        Thank you for your message. It has been sent.
                      </div>
                    ) : (
                      ""
                    )}
                    <div className={styles.error}> {errors.email?.message}</div>
                  </div>
                </form>
              </div>
            </div>
            <div className="">
              <h1 className={styles.logo}>CUTHBERT</h1>
              <p className={styles.dat}>BUILD BY CAO TIEN DAT</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Footer;
