import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/kitchen.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

function Bathroom() {
  const swiperProps = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
  };
  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <Container className={styles.Breadcrumbs}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Bathroom</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </Container>
      <section className={styles.mgT80}>
        <Container>
          <Row>
            <Col lg={7} xs={12}>
              <Swiper {...swiperProps}>
                <SwiperSlide>
                  <img
                    className={styles.img}
                    src="/project/bath/pic-1.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className={styles.img}
                    src="/project/bath/pic-2.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className={styles.img}
                    src="/project/bath/pic-3.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className={styles.img}
                    src="/project/bath/pic-4.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col lg={5}>
              <div className={styles.info}>
                <h1 className={styles.name}>dark design</h1>
                <p className={styles.kitchenText}>
                  Ac auctor augue mauris augue neque gravida in. Sedsed risus
                  pretium quam vulputate dignissim suspendisse in est. Et leo
                  duis ut diam quam nulla porttitor massa id. Augue ut lectus
                  arcu bibendum at varius vel pharetra.
                </p>
                <div className={styles.tag}>
                  <p>
                    <b>DATE : </b>
                    <i>July 11, 2022 </i>
                  </p>
                  <p>
                    <b>CATEGORY : </b> <i> INTERIOR KITCHEN</i>
                  </p>
                  <p>
                    <b>TAG : </b>
                    <i> Bathroom Stone</i>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}
export default Bathroom;
