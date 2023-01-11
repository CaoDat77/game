import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import { setUser } from "../store/features/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../lib/firebase";
import { selectUser } from "../store/features/auth/auth.slice";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const Layout = (props) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
  return (
    <div className="">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
