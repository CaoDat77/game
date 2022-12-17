function ButtonBlack({ text }) {
  return (
    <Link href="/">
      <button className={styles.buttonBlack}>{text}</button>
    </Link>
  );
}

export default ButtonBlack;
