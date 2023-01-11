import Link from "next/link";
import Container from "react-bootstrap/Container";
import styles from "../styles/Header.module.css";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { selectCart } from "../store/features/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { selectUser } from "../store/features/auth/auth.slice";
import { getAuth } from "firebase/auth";
import { app } from "../lib/firebase";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { setUser } from "../store/features/auth/auth.slice";
function Header() {
  const dispatch = useDispatch();
  //auth
  const user = useSelector(selectUser);
  const auth = getAuth(app);

  React.useEffect(() => {
    auth.onAuthStateChanged((auth, error) => {
      if (auth && !user) {
        dispatch(
          setUser({
            accessToken: auth.accessToken,
            uid: auth.uid,
            displayName: auth.displayName,
            email: auth.email,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  const router = useRouter();
  const open = React.useRef();
  const menu = React.useRef();
  const close = React.useRef();
  const nav = React.useRef();
  const ul = React.useRef();
  const list = React.useRef();

  const { items } = useSelector(selectCart);

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
    let listNav = list.current;
    let li = document.querySelectorAll(".link");

    const handleScroll = () => {
      if (router.pathname === "/") {
        if (window.scrollY > 100) {
          open.current.style.color = "black";
          navigation.style.backgroundColor = "#fff";
          navigation.style.boxShadow = "1px 1px 10px #000";
          listNav.style.marginTop = "0";
          li.forEach((item) => {
            item.style.color = "black";
          });
        } else if (window.scrollY < 100) {
          open.current.style.color = "white";
          navigation.style.backgroundColor = "unset";
          navigation.style.boxShadow = "unset";
          listNav.style.marginTop = "2rem";
          li.forEach((item) => {
            item.style.color = "white";
          });
        }
      } else if (router.pathname != "/") {
        if (window.scrollY > 100) {
          open.current.style.color = "black";
          navigation.style.backgroundColor = "#fff";
          navigation.style.boxShadow = "1px 1px 10px #000";
          listNav.style.marginTop = "0";
          li.forEach((item) => {
            item.style.color = "black";
          });
        } else {
          open.current.style.color = "black";
          navigation.style.backgroundColor = "unset";
          listNav.style.marginTop = "2rem";
          navigation.style.boxShadow = "unset";
          li.forEach((item) => {
            item.style.color = "black";
          });
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  React.useEffect(() => {
    let li = document.querySelectorAll(".link");

    if (user !== null) {
      let logout = document.querySelector(".logout");
      // logout.style.color = "white";
    }
    if (router.pathname === "/") {
      open.current.style.color = "white";
      li.forEach((item) => {
        item.style.color = "white";
      });
    } else if (router.pathname !== "/") {
      open.current.style.color = "black";
      li.forEach((item) => {
        item.style.color = "black";
      });
    }
  });

  const closeMenu = () => {
    menu.current.style.transform = "translateX(-100%)";
  };
  let src = router.pathname;

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
          <Link href="/" onClick={closeMenu}>
            <div className="">HOME</div>
          </Link>

          <Link href="/about" onClick={closeMenu}>
            <div className="">ABOUT</div>
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            <div className="">CONTACT</div>
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            <div className="">BLOG</div>
          </Link>

          <Link href="/products" onClick={closeMenu}>
            <div className="">SHOP</div>
          </Link>

          <Link href="/login" onClick={closeMenu}>
            <div className="">LOG IN</div>
          </Link>
        </div>
      </div>
      <Container fluid ref={nav} className={styles.navBg}>
        <Container className={styles.nav} ref={list}>
          <MenuTwoToneIcon className={styles.menu} ref={open} />
          <div className={styles.logo}>
            <Link href="/" className="link">
              CUTHBERT
            </Link>
          </div>

          <ul className={styles.ul} ref={ul}>
            <li>
              <Link href="/" className="link">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="link">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li>
              <Link href="/blog" className="link">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/products" className="link">
                SHOP
              </Link>
            </li>
            <li className={styles.iconCart} count={0}>
              <Link href="/cart" className="link">
                <ShoppingCartTwoToneIcon className={styles.cart} />
              </Link>
            </li>

            <li>
              {user !== null ? (
                <p
                  onClick={() => {
                    auth.signOut();
                  }}
                  style={{
                    cursor: "pointer",
                    color: "yellow",
                    fontWeight: "600",
                    margin: 0,
                  }}
                  className="logout"
                >
                  {" "}
                  Log Out
                </p>
              ) : (
                <Link href="/login" className="link">
                  LOG IN
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </Container>
    </Container>
  );
}

export default Header;
