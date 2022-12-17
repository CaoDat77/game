import styles from "../styles/About.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sologan from "./componnet/Sologan";
import { ButtonBlack } from "./componnet/Button";
import Link from "next/link";

function About() {
  return (
    <Container fluid className={styles.page}>
      <Container fluid className={styles.bg}>
        <Sologan text="ABOUT US" />
      </Container>
      <section>
        <Container className={styles.mgT80}>
          <Row>
            <Col lg={6}>
              <div className={styles.item}>
                <Col lg={1} xs={2} className={styles.center}>
                  <img className={styles.img} src="/us/icon-1.png" alt="" />
                </Col>
                <Col lg={11} xs={10}>
                  <div className={styles.textAbout}>
                    <p className={styles.title}>FAST AND PROFESSIONAL</p>
                    <p className={styles.text}>
                      Elementum facilisis leo vel fringilla estulla co rper
                      eget. Vitae proin sagittis nisl rhoncus mattis rhoncus.
                    </p>
                  </div>
                </Col>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.item}>
                <Col lg={1} xs={2} className={styles.center}>
                  <img className={styles.img} src="/us/icon-2.png" alt="" />
                </Col>
                <Col lg={11} xs={10}>
                  <div className={styles.textAbout}>
                    <p className={styles.title}>FAST AND PROFESSIONAL</p>
                    <p className={styles.text}>
                      Elementum facilisis leo vel fringilla estulla co rper
                      eget. Vitae proin sagittis nisl rhoncus mattis rhoncus.
                    </p>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className={styles.item}>
                <Col lg={1} xs={2} className={styles.center}>
                  <img className={styles.img} src="/us/icon-3.png" alt="" />
                </Col>
                <Col lg={11} xs={10}>
                  <div className={styles.textAbout}>
                    <p className={styles.title}>FAST AND PROFESSIONAL</p>
                    <p className={styles.text}>
                      Elementum facilisis leo vel fringilla estulla co rper
                      eget. Vitae proin sagittis nisl rhoncus mattis rhoncus.
                    </p>
                  </div>
                </Col>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.item}>
                <Col lg={1} xs={2} className={styles.center}>
                  <img className={styles.img} src="/us/icon-4.png" alt="" />
                </Col>
                <Col lg={11} xs={10}>
                  <div className={styles.textAbout}>
                    <p className={styles.title}>FAST AND PROFESSIONAL</p>
                    <p className={styles.text}>
                      Elementum facilisis leo vel fringilla estulla co rper
                      eget. Vitae proin sagittis nisl rhoncus mattis rhoncus.
                    </p>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.mgT80}>
        <Container>
          <Row>
            <Col lg={7}>
              <img className={styles.img} src="/us/us-2.jpg" alt="" />
            </Col>
            <Col lg={5} className={styles.center}>
              <div className={styles.info}>
                <h2 className={styles.infoTitle}>OUR TEAM</h2>
                <p className={styles.textInfo}>
                  Ullamcorper eget nulla facilisi etiam dignissim. Tris que so
                  llicitudin nibh sit amet com modo. Ut port titor leo dim
                  sollicitudin tempor id eu altricies mi quis hendrerit. Sed id
                  semper maec.
                </p>

                <ButtonBlack text="READ MORE" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.mgT80}>
        <Container>
          <Row>
            <Col lg={2}>
              <img src="/us/logo-1.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="/us/logo-2.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="/us/logo-3.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="/us/logo-4.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="/us/logo-5.png" alt="" />
            </Col>
            <Col lg={2}>
              <img src="/us/logo-1.png" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.mgT80}>
        <Container>
          <Row>
            <Col lg={5} className={styles.center}>
              <div className={styles.info}>
                <h2 className={styles.infoTitle}>PROJECTS</h2>
                <p className={styles.textProject}>
                  Ullamcorper eget nulla facilisi etiam dignissim. Tris que so
                  llicitudin nibh sit amet com modo. Ut port titor leo dim
                  sollicitudin tempor id eu altricies mi quis hendrerit. Sed id
                  semper maec.
                </p>

                <ButtonBlack text="READ MORE" />
              </div>
            </Col>
            <Col lg={7}>
              <img className={styles.img} src="/us/us-3.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.mgT80}>
        <Container>
          <h1>OUR MEMBERS</h1>
          <Row>
            <Col lg={3}>
              <div className={styles.itemMember}>
                <div className={styles.member}>
                  <img className={styles.img} src="/us/member-1.jpg" alt="" />
                  <div className={styles.molda}>
                    <div className={styles.socials}>
                      <Link href="/">FB</Link>
                      <Link href="/">IG</Link>
                      <Link href="/">TW</Link>
                    </div>
                  </div>
                </div>
                <div className={styles.name}>DAVID SLATER</div>
                <div className={styles.job}>Designer</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.itemMember}>
                <div className={styles.member}>
                  <img className={styles.img} src="/us/member-2.jpg" alt="" />
                  <div className={styles.molda}>
                    <div className={styles.socials}>
                      <Link href="/">FB</Link>
                      <Link href="/">IG</Link>
                      <Link href="/">TW</Link>
                    </div>
                  </div>
                </div>
                <div className={styles.name}>SAM THOMSON</div>
                <div className={styles.job}>Head designer</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.itemMember}>
                <div className={styles.member}>
                  <img className={styles.img} src="/us/member-3.jpg" alt="" />
                  <div className={styles.molda}>
                    <div className={styles.socials}>
                      <Link href="/">FB</Link>
                      <Link href="/">IG</Link>
                      <Link href="/">TW</Link>
                    </div>
                  </div>
                </div>
                <div className={styles.name}>ANDREA MACLEOD</div>
                <div className={styles.job}>Art director</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.itemMember}>
                <div className={styles.member}>
                  <img className={styles.img} src="/us/member-4.jpg" alt="" />
                  <div className={styles.molda}>
                    <div className={styles.socials}>
                      <Link href="/">FB</Link>
                      <Link href="/">IG</Link>
                      <Link href="/">TW</Link>
                    </div>
                  </div>
                </div>
                <div className={styles.name}>AMANDA TERRY</div>
                <div className={styles.job}>Decorater</div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <div className={styles.itemMember}>
                <div className={styles.member}>
                  <img className={styles.img} src="/us/member-5.jpg" alt="" />
                  <div className={styles.molda}>
                    <div className={styles.socials}>
                      <Link href="/">FB</Link>
                      <Link href="/">IG</Link>
                      <Link href="/">TW</Link>
                    </div>
                  </div>
                </div>
                <div className={styles.name}>DYLAN WALKER</div>
                <div className={styles.job}>Architect</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.itemMember}>
                <div className={styles.member}>
                  <img className={styles.img} src="/us/member-6.jpg" alt="" />
                  <div className={styles.molda}>
                    <div className={styles.socials}>
                      <Link href="/">FB</Link>
                      <Link href="/">IG</Link>
                      <Link href="/">TW</Link>
                    </div>
                  </div>
                </div>
                <div className={styles.name}>JUSTIN SMITH</div>
                <div className={styles.job}>3D creator</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default About;
