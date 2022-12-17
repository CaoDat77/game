import { Col, Row } from "react-bootstrap";
import styles from "../../styles/BlogHome.module.css";
import Link from "next/link";

function Blog() {
  return (
    <Row>
      <Col lg={4} className={styles.box}>
        <Link href="/detail/detailblog" className={styles.textA}>
          <img className={styles.re} src="/home/home-7.jpg" alt="" />
          <div className={styles.ab}>
            KITCHEN
            <p className={styles.textBlog}>
              Vel eu possim interp retaris, zril conclu daturque mea ne. Sed
              solum possim gloriatur.
            </p>
          </div>
        </Link>
      </Col>
      <Col lg={4} className={styles.box}>
        <Link href="/detail/detailblog" className={styles.textA}>
          <img className={styles.re} src="/home/home-8.jpg" alt="" />
          <div className={styles.ab}>
            BATHS
            <p className={styles.textBlog}>
              Vel eu possim interp retaris, zril conclu daturque mea ne. Sed
              solum possim gloriatur.
            </p>
          </div>
        </Link>
      </Col>
      <Col lg={4} className={styles.box}>
        <Link href="/detail/detailblog" className={styles.textA}>
          <img className={styles.re} src="/home/home-9.jpg" alt="" />
          <div className={styles.ab}>
            LIVING
            <p className={styles.textBlog}>
              Vel eu possim interp retaris, zril conclu daturque mea ne. Sed
              solum possim gloriatur.
            </p>
          </div>
        </Link>
      </Col>
    </Row>
  );
}

export default Blog;
