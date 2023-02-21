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
        <h1
          style={{ color: "white", fontSize: "5rem", letterSpacing: "0.3rem" }}
        >
          BLOG
        </h1>
      </Container>
      <section className={styles.mT80}>
        <Container>
          <Row>
            <Col lg={4} className={styles.mt16}>
              <Link href="/detailblog" className={styles.item}>
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
                  Success needs hard work. Don’t listen to these ‘get rich
                  quick’ schemes.
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>
            <Col lg={4} className={styles.mt16}>
              <Link href="/detailblog" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-4.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>Utilizing wood in architecture</h1>
                <p className={styles.text}>
                  Echnological expertise. Through a unique combination of
                  engineering, construction and design disciplines
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>
          </Row>

          <Row className={styles.mT32}>
            <Col lg={4} className={styles.mt16}>
              <Link href="/detailblog" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-5.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>Brooklyn Penthouse</h1>
                <p className={styles.text}>
                  Through a unique combination of engineering, construction and
                  design disciplines and expertise,
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>

            <Col lg={4} className={styles.mt16}>
              <Link href="/detailblog" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-6.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>Modern Architecture</h1>
                <p className={styles.text}>
                  Urban design draws together the many strands of place-making,
                  environmental stewardship,
                </p>
                <p className={styles.read}>
                  Read more <ArrowForwardSharpIcon />
                </p>
              </Link>
            </Col>

            <Col lg={4} className={styles.mt16}>
              <Link href="/detailblog" className={styles.item}>
                <div className={styles.over}>
                  <img className={styles.img} src="/blog/pic-7.jpg" alt="" />
                </div>

                <h1 className={styles.h1}>Prestigious</h1>
                <p className={styles.text}>
                  Since the 1980s, as the complexity of buildings began to
                  increase, the field of architecture became multi-disciplinary
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
