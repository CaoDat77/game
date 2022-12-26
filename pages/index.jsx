import styles from "../styles/HomePage.module.css";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBlack from "../componnet/ButtonBlack";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "../componnet/List";
import Link from "next/link";
import Slider from "../componnet/Slider";
import Blog from "../componnet/BlogHome";
import Sologan from "../componnet/Sologan";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.haha}>
        <Sologan text="DECOR" />
      </div>

      <div className={styles.container}>
        <section className={styles.mgT80}>
          <Row>
            <Col xs={12} lg={6} className={styles.nonePd}>
              <img className={styles.img} src="/home/home-1.jpg" alt="" />
            </Col>
            <Col xs={12} lg={6} className={styles.nonePd}>
              <div className={styles.maxwidth}>
                <div className="">
                  <p className={styles.font22}>FURNITURE</p>
                  <p className={styles.font}>
                    Ullamcorper eget nulla facilisi etiam dignissim. Tristi que
                    sollicitudin nibh sit amet commodo. Ut porttitor leo dim
                    sollicitudin tempor id eu altricies mi quis hendrerit. Sed
                    id semper risus.
                  </p>
                  <Link href="/about">
                    <ButtonBlack text="VIEW MORE" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className={styles.mgT80}>
          <Row>
            <Col xs={12} lg={6} className={styles.overflow}>
              <Col lg={12}>
                <List />
              </Col>
            </Col>

            <Col xs={12} lg={6}>
              <img className={styles.img} src="/home/home-2.jpg" alt="" />
            </Col>
          </Row>
        </section>
      </div>

      <section className={styles.mgT80}>
        <Container fluid>
          <Row>
            <Col lg={4} href="/" className={styles.pdNone}>
              <Link href="/product/kitchen">
                <Col lg={12} className={styles.home3}></Col>
              </Link>
              <Link className={styles.text} href="/product/kitchen">
                KITCHEN
              </Link>
            </Col>
            <Col lg={4} className={styles.pdNone}>
              <Link href="/product/bathroom">
                <Col lg={12} className={styles.home4}></Col>
              </Link>
              <Link className={styles.text} href="/product/bathroom">
                BATHROOM
              </Link>
            </Col>
            <Col lg={4} className={styles.pdNone}>
              <Link href="/product/livingroom">
                <Col lg={12} className={styles.home5}></Col>
              </Link>
              <Link className={styles.text} href="/product/livingroom">
                LIVING ROOM
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.mgT80}>
        <div className={styles.container}>
          <Row>
            <Col lg={6} className={styles.nonePd}>
              <img className={styles.img} src="/home/home-6.jpg" alt="" />
            </Col>

            <Col lg={6} className={styles.nonePd}>
              <div className={styles.maxwidth}>
                <div className="">
                  <p className={styles.font22}>FEATURES AND AWARDS</p>
                  <p className={styles.font}>
                    Ullamcorper eget nulla facilisi etiam dignissim. Tristi que
                    sollicitudin nibh sit amet commodo. Ut porttitor leo dim
                    sollicitudin tempor id eu altricies mi quis hendrerit. Sed
                    id semper risus.
                  </p>
                  <div className=""></div>
                  <div className={styles.mgT16}>
                    <Link href="/" className={styles.linkText}>
                      KITCHEN AND DINING ROOMS
                    </Link>
                  </div>

                  <div className={styles.mgT16}>
                    <Link href="/" className={styles.linkText}>
                      BEDROOMS AND LIVING ROOMS
                    </Link>
                  </div>
                  <div className={styles.mgT16}>
                    <Link href="/" className={styles.linkText}>
                      BATHROOMS AND LAUNDRY ROOMS
                    </Link>
                  </div>
                  <div className={styles.mgT16}>
                    <Link href="/" className={styles.linkText}>
                      WORK SPACES AND GARDENS
                    </Link>
                  </div>
                  <Link href="/contact">
                    <ButtonBlack text="VIEW MORE" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className={styles.mgT80}>
        <Container className={styles.border}>
          <Slider />
        </Container>
      </section>

      <section className={styles.mgT80}>
        <div className={styles.container}>
          <h1 className={styles.blog}>
            <i>Blog</i>
          </h1>
          <Blog />
        </div>
      </section>
    </div>
  );
}

export default Home;
