import styles from "../styles/HomePage.module.css";
import { Button } from "./Button";
import "animate.css";
import "aos";
function Sologan({ text }) {
  return (
    <div className="" data-aos="fade-up">
      <div className={styles.banner}>
        <p className={styles.bannerTitle}>{text}</p>
        <p className={styles.bannerText}>
          <i>
            The perfect place for every contemporary furniture store and
            manufacturer.
          </i>
        </p>
        <Button text="VIEW MORE" />
      </div>
    </div>
  );
}

export default Sologan;
