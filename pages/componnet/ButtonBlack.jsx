import styles from "../../styles/Button.module.css";
import Link from "next/link";

function ButtonBlack({ text }) {
  return (
    <Link href="/">
      <button className={styles.buttonBlack}>{text}</button>
    </Link>
  );
}

export default ButtonBlack;
