import styles from "../styles/Button.module.css";
import Link from "next/link";

export function Button({ text }) {
  return (
    <Link href="/products">
      <button className={styles.button}>{text}</button>
    </Link>
  );
}

export default Button;
