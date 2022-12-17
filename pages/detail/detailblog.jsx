import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../styles/DetailBlog.module.css";
import Link from "next/link";

function DetailBlog() {
  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <Container className={styles.Breadcrumbs}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
            <Breadcrumb.Item active>Kitchen</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </Container>

      <section className={styles.mgT80}>
        <Container>
          <Row>
            <Col lg={8}>
              <img className={styles.img} src="/detailblog/pic-1.jpg" alt="" />
              <p className={styles.small}>
                BY SIMONA LEE SEPTEMBER 28, 2022 ARTDESIGN
              </p>
              <h1 className={styles.h1}>KITCHEN</h1>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, an vulputate scribentur cotidieque
                sit. Ne per timeam virtute suavitate, cu nam meis zril
                dissentiet, dictas reprimique referrentur vis ut. Dolor
                adolescens duo eu, nemore aliquam cum ne. Ullum ignota
                necessitatibus in ius, nec quas fierent no. Per ut molestie
                perpetua.Lorem ipsum dolor sit amet, an vulputate scribentur
                cotidieque sit. Ne per timeam virtute suavitate, cu nam meis
                zril dissentiet, dictas reprimique referrentur vis ut. Dolor
                adolescens duo eu, nemore aliquam cum ne. Ullum ignota
                necessitatibus in ius, nec quas fierent no. Per ut molestie
                perpetua.Lorem ipsum dolor sit amet, an vulputate scribentur
                cotidieque sit. Ne per timeam virtute suavitate, cu nam meis
                zril dissentiet, dictas reprimique referrentur vis ut.
              </p>
              <h1 className={styles.h1}>HOW WE OPERATE</h1>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, an vulputate scribentur cotidieque
                sit. Ne per timeam virtute suavitate, cu nam meis zril
                dissentiet, dictas reprimique referrentur vis ut. Dolor
                adolescens duo eu, nemore aliquam cum ne. Ullum ignota
                necessitatibus in ius, nec quas fierent no. Per ut molestie
                perpetua.Lorem ipsum dolor sit amet, an vulputate scribentur
                cotidieque sit. Ne per
              </p>
              <h1 className={styles.h1}>HOW WE OPERATE</h1>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, an vulputate scribentur cotidieque
                sit. Ne per timeam virtute suavitate, cu nam meis zril
                dissentiet, dictas reprimique referrentur vis ut. Dolor
                adolescens duo eu, nemore aliquam cum ne. Ullum ignota
                necessitatibus in ius, nec quas fierent no. Per ut molestie
                perpetua.Lorem ipsum dolor sit amet, an vulputate scribentur
                cotidieque sit. Ne per
              </p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, an vulputate scribentur cotidieque
                sit. Ne per timeam virtute suavitate, cu nam meis zril
                dissentiet, dictas reprimique referrentur vis ut. Dolor
                adolescens duo eu, nemore aliquam cum ne. Ullum ignota
                necessitatibus in ius, nec quas fierent no. Per ut molestie
                perpetua.Lorem ipsum dolor sit amet, an vulputate scribentur
                cotidieque sit. Ne per
              </p>
              <Row>
                <Col lg={6}>
                  <img
                    className={styles.img}
                    src="/detailblog/pic-3.jpg"
                    alt=""
                  />
                </Col>

                <Col lg={6}>
                  <img
                    className={styles.img}
                    src="/detailblog/pic-2.jpg"
                    alt=""
                  />
                </Col>
              </Row>

              <p className={styles.text}>
                Lorem ipsum dolor sit amet, an vulputate scribentur cotidieque
                sit. Ne per timeam virtute suavitate, cu nam meis zril
                dissentiet, dictas reprimique referrentur vis ut. Dolor
                adolescens duo eu, nemore aliquam cum ne. Ullum ignota
                necessitatibus in ius, nec quas fierent no. Per ut molestie
                perpetua.Lorem ipsum dolor sit amet, an vulputate scribentur
                cotidieque sit. Ne per
              </p>
            </Col>
            <Col lg={3}>
              <div className={styles.bgAvata}>
                <div className={styles.center}>
                  <img
                    className={styles.avata}
                    src="/detailblog/avata-1.jpg"
                    alt=""
                  />
                  <h1 className={styles.name}>SIMONA LEE</h1>
                  <p className={styles.job}>Editor</p>
                </div>
              </div>
              <div className="">
                <h1>CATEGORIES</h1>
                <ul className={styles.ul}>
                  <li>
                    <Link href="/blog">ART</Link>
                  </li>
                  <li>
                    <Link href="/blog">DECOR</Link>
                  </li>
                  <li>
                    <Link href="/blog">DESIGN</Link>
                  </li>
                  <li>
                    <Link href="/blog">FASHION</Link>
                  </li>
                  <li>
                    <Link href="/blog">INTERVIEW</Link>
                  </li>
                  <li>
                    <Link href="/blog">LIFESTYLE</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h1>TAGS</h1>
                <div className={styles.tag}>
                  <span>Accommodation</span>
                  <span>Awesome</span>
                  <span>City</span>
                  <span>Homedesign</span>
                  <span>Print</span>
                </div>
              </div>

              <img src="/detailblog/pic-4.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default DetailBlog;
