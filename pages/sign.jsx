import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/login.module.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  addDoc,
  collection,
  getFirestore,
} from "firebase/auth";
import { app } from "../lib/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBlack from "../componnet/ButtonBlack";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Sign = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const {
    reset: reset2,
    register: register2,
    handleSubmit: handleSubmit2,
    getValues,
    formState: { errors: errors2, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const name = register2("name", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (6 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Name must be between 6 and 50 characters long",
    },
  });

  const email = register2("email", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  const password = register2("password", {
    required: "Please fill out this field",
    validate: {
      length: (v) =>
        (4 <= v.length && v.length <= 30) ||
        "Password must be between 6 and 50 characters long",
    },
  });

  const rePassword = register2("rePassword", {
    required: "Please fill out this field",
    deps: ["password"],
    validate: {
      match: (v) => v === getValues("password") || "password does not match",
    },
  });

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.form}>
          <h1 style={{ marginBottom: "3rem", fontSize: "3.2rem" }}>Sign Up</h1>
          <form
            key={2}
            action=""
            onSubmit={handleSubmit2((data) => {
              createUserWithEmailAndPassword(auth, data.email, data.password)
                .then(() => {
                  // const reference = collection(getFirestore(app), "name");
                  // addDoc(reference, data.name);
                  updateProfile(auth.currentUser, {
                    displayName: data.name,
                  });
                  toast.success(`Login successfully`);
                  reset2();
                  router.push("/");
                })
                .catch(function (error) {
                  toast.error("Account already exists");
                });
            })}
          >
            <div className={styles.field}>
              <TextField
                id="name"
                placeholder="Your full name"
                variant="outlined"
                type="text"
                fullWidth
                {...name}
              />
              <p className={styles.error}>{errors2.name?.message}</p>
            </div>

            <div className={styles.field}>
              <TextField
                id="email"
                placeholder="Email"
                variant="outlined"
                type="email"
                fullWidth
                {...email}
              />
              <p className={styles.error}>{errors2.email?.message}</p>
            </div>

            <div className={styles.field}>
              <TextField
                id="password"
                placeholder="Password"
                variant="outlined"
                type="password"
                fullWidth
                {...password}
              />
              <p className={styles.error}>{errors2.password?.message}</p>
            </div>

            <div className={styles.field}>
              <TextField
                id="confirmPassword"
                placeholder="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                {...rePassword}
              />
              <p className={styles.error}>{errors2.rePassword?.message}</p>
            </div>
            <div className={styles.login}>
              <ButtonBlack type="submit" text="SIGN UP"></ButtonBlack>
              <p>
                Already have an account? <Link href="/login">Login</Link>
              </p>
            </div>
          </form>

          <p className={styles.or}>OR LOGIN WITH</p>

          <Button
            variant="contained"
            sx={{
              fontSize: "16px",
              width: "100%",
              bgcolor: "#009EFF",
              marginBottom: "20px",
            }}
            onClick={() => {
              signInWithPopup(auth, provider).catch((err) =>
                console.error(err)
              );
            }}
          >
            Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sign;
