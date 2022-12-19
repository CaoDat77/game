import Link from "next/link";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Header.module.css";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const open = React.useRef();
  const menu = React.useRef();
  const close = React.useRef();
  const nav = React.useRef();
  const ul = React.useRef();
  React.useEffect(() => {
    const handleClose = () => {
      menu.current.style.transform = "translateX(-100%)";
    };
    close.current.addEventListener("click", handleClose);

    const handleOpen = () => {
      menu.current.style.transform = "translateX(0)";
    };
    open.current.addEventListener("click", handleOpen);

    let navigation = nav.current;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        navigation.style.backgroundColor = "#999";
      } else {
        navigation.style.backgroundColor = "unset";
      }
    };
    console.log(navigation);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container fluid className={styles.center}>
      <div className={styles.menuNav} ref={menu}>
        <div className={styles.headerMenu}>
          <div className={styles.logoNav}>CUTHBERT</div>
          <div className={styles.logoNav} ref={close}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.navMb}>
          <Link href="/">
            <div className="">HOME</div>
          </Link>

          <Link href="/about">
            <div className="">ABOUT</div>
          </Link>

          <Link href="/contact">
            <div className="">CONTACT</div>
          </Link>

          <Link href="/blog">
            <div className="">BLOG</div>
          </Link>

          <Link href="/shop">
            <div className="">SHOP</div>
          </Link>
        </div>
      </div>
      <Container fluid ref={nav} className={styles.navBg}>
        <Container className={styles.nav}>
          <MenuTwoToneIcon className={styles.menu} ref={open} />
          <div className={styles.logo}>
            <Link href="/">CUTHBERT</Link>
          </div>

          <ul className={styles.ul} ref={ul}>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/shop">SHOP</Link>
            </li>
            <li>
              <Link href="/cart">
                <ShoppingCartTwoToneIcon className={styles.cart} />
              </Link>
            </li>
          </ul>
        </Container>
      </Container>
    </Container>
  );
}

export default Header;
