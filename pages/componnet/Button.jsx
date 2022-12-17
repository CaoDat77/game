import styles from "../../styles/Button.module.css";
import Link from "next/link";

export function Button({ text }) {
  return (
    <Link href="/">
      <button className={styles.button}>{text}</button>
    </Link>
  );
}

export function ButtonBlack({ text }) {
  return (
    <Link href="/">
      <button className={styles.buttonBlack}>{text}</button>
    </Link>
  );
}
