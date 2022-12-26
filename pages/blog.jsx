import styles from "../styles/Blog.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sologan from "../componnet/Sologan";
import Link from "next/link";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

function Blog() {
  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <Sologan text="BLOG" />
      </Container>
      <section className={styles.mT80}>
        <Container>
          <Row>
            <Col lg={4} className={styles.mt16}>
              <Link href="/" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-2.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>
                  Building the architecture of the future
                </h1>
                <p className={styles.text}>
                  I think that you should be able to select more than one reason
                  for rating.{" "}
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>
            <Col lg={4} className={styles.mt16}>
              <Link href="/" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-3.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>
                  Collective Living Challenge In modern
                </h1>
                <p className={styles.text}>
                  I think that you should be able to select more than one reason
                  for rating.{" "}
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>
            <Col lg={4} className={styles.mt16}>
              <Link href="/" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-4.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>Utilizing wood in architecture</h1>
                <p className={styles.text}>
                  I think that you should be able to select more than one reason
                  for rating.{" "}
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>
          </Row>

          <Row className={styles.mT32}>
            <Col lg={4} className={styles.mt16}>
              <Link href="/" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-5.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>
                  Building the architecture of the future
                </h1>
                <p className={styles.text}>
                  I think that you should be able to select more than one reason
                  for rating.{" "}
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>

            <Col lg={4} className={styles.mt16}>
              <Link href="/" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-6.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>
                  Building the architecture of the future
                </h1>
                <p className={styles.text}>
                  I think that you should be able to select more than one reason
                  for rating.{" "}
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>

            <Col lg={4} className={styles.mt16}>
              <Link href="/" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-7.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>
                  Building the architecture of the future
                </h1>
                <p className={styles.text}>
                  I think that you should be able to select more than one reason
                  for rating.{" "}
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default Blog;
