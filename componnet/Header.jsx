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
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { loadProduct } from "../store/features/products/products.slice";
import { setUser } from "../store/features/auth/auth.slice";
import PersonIcon from "@mui/icons-material/Person";
function Header() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadProduct({ productId: 1 }));
  }, []);
  //auth
  const user = useSelector(selectUser);
  const auth = getAuth(app);
  // cart
  const [carts, setCart] = React.useState([]);
  const cartRef = collection(getFirestore(app), "store");
  React.useEffect(() => {
    const q = query(cartRef);
    const cartlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });

    return () => cartlist();
  }, [user == null ? null : user.uid]);

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
  const cart = React.useRef();

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

    const handleScroll = () => {
      if (window.scrollY > 100) {
        navigation.style.backgroundColor = "#fff";
        navigation.style.boxShadow = "1px 1px 10px #000";
        listNav.style.marginTop = "0";
      } else if (window.scrollY < 100) {
        navigation.style.backgroundColor = "unset";
        navigation.style.boxShadow = "unset";
        listNav.style.marginTop = "2rem";
      }
    };

    if (user !== null) {
      let logout = document.querySelector(".logout");
      // logout.style.color = "white";
    }

    window.addEventListener("scroll", handleScroll);
  }, [router.pathname]);

  // React.useEffect(() => {}, [router.pathname, user]);

  const closeMenu = () => {
    menu.current.style.transform = "translateX(-100%)";
  };

  const handlerToCart = () => {
    if (auth.currentUser) {
      router.push("/cart");
    } else {
      toast.warning(`You must be logged in to access this page`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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

          <ul className={styles.ul}>
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
            {auth.currentUser && carts.length === 0 ? (
              <li className={styles.iconCart} count={0}>
                <Link href="/cart" className="link">
                  <ShoppingCartTwoToneIcon className={styles.cart} ref={cart} />
                </Link>
              </li>
            ) : (
              <>
                {" "}
                <li className={styles.iconCart} count={carts.length}>
                  <Link href="" onClick={handlerToCart} className="link">
                    <ShoppingCartTwoToneIcon className={styles.cart} />
                  </Link>
                </li>
              </>
            )}

            <li>
              {user !== null ? (
                <div className={styles.user}>
                  <Link href="/account">
                    <PersonIcon
                      style={{
                        cursor: "pointer",

                        fontWeight: "600",
                        margin: 0,
                      }}
                      className={styles.logged}
                    />
                  </Link>
                </div>
              ) : (
                <Link href="/login" className="link">
                  <PersonIcon
                    style={{
                      cursor: "pointer",
                      fontWeight: "600",
                      margin: 0,
                    }}
                    className={styles.cart}
                  />
                </Link>
              )}
            </li>

            {user !== null ? (
              <li
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure you want to sign out?",
                    icon: "question",
                    iconHtml: "?",
                    confirmButtonText: "Yes",
                    cancelButtonText: "No",
                    showCancelButton: true,
                    showCloseButton: true,
                    width: "50rem",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      toast.success(`Log out successfully`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                      auth.signOut();
                      router.push("/");
                    }
                  });
                }}
                style={{ cursor: "pointer" }}
              >
                Log out
              </li>
            ) : (
              ""
            )}
          </ul>
        </Container>
      </Container>
    </Container>
  );
}

export default Header;
