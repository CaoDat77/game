import Accordion from "react-bootstrap/Accordion";
import styles from "../styles/List.module.css";
function List() {
  return (
    <Accordion className={styles.pd}>
      <Accordion.Item className={styles.width} eventKey="0">
        <Accordion.Header className={styles.head}>
          OUR PHILOSOPHY
        </Accordion.Header>
        <Accordion.Body className={styles.body}>
          Vulputate eu scelerisque felis imperdiet proin. Feugiat nisl pretium
          fusce id velit ut tortor. Porttitor lacus luctus blandit.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className={styles.width}>
        <Accordion.Header className={styles.head}>
          HOW TO MAKE A SUCCES
        </Accordion.Header>
        <Accordion.Body className={styles.body}>
          Vulputate eu scelerisque felis imperdiet proin. Feugiat nisl pretium
          fusce id velit ut tortor. Porttitor lacus luctus blandit.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className={styles.width}>
        <Accordion.Header className={styles.head}>
          STARTING PROJECTS
        </Accordion.Header>
        <Accordion.Body className={styles.body}>
          Vulputate eu scelerisque felis imperdiet proin. Feugiat nisl pretium
          fusce id velit ut tortor. Porttitor lacus luctus blandit.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className={styles.width}>
        <Accordion.Header className={styles.head}>
          FUNCTION AND BEAUTY
        </Accordion.Header>
        <Accordion.Body className={styles.body}>
          Vulputate eu scelerisque felis imperdiet proin. Feugiat nisl pretium
          fusce id velit ut tortor. Porttitor lacus luctus blandit.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default List;
