import styles from "../../styles/Button.module.css";
import Link from "next/link";

function ButtonBlack({ text }) {
  return <button className={styles.buttonBlack}>{text}</button>;
}

export default ButtonBlack;
