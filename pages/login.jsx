import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/login.module.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../lib/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBlack from "../componnet/ButtonBlack";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const logSuccess = () => toast.success("Login successfully");

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  console.log(auth);
  const {
    reset: reset3,
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3, isSubmitSuccessful },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });

  const email = register3("email", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  const password = register3("password", {
    required: "Please fill out this field",
    validate: {
      length: (v) => (4 <= v.length && v.length <= 30) || "Incorrect password",
    },
  });

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.form}>
          <h1 style={{ marginBottom: "3rem", fontSize: "3.2rem" }}>Log In</h1>
          <form
            key={3}
            action=""
            onSubmit={handleSubmit3((data) => {
              signInWithEmailAndPassword(auth, data.email, data.password)
                .then(() => {
                  if (auth.currentUser) {
                    toast.success(`Login successfully`, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    reset3();

                    router.push("/");
                  }
                })
                .catch((err) => {
                  toast.error(`Incorrect account or password`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                });
            })}
          >
            <div className={styles.field}>
              <TextField
                id="email"
                placeholder="Email"
                variant="outlined"
                type="email"
                fullWidth
                {...email}
              />
              <p className={styles.error}>{errors3.email?.message}</p>
            </div>
            <div className={styles.field}>
              <TextField
                id="pass"
                placeholder="Password"
                variant="outlined"
                type="password"
                fullWidth
                {...password}
              />
              <p className={styles.error}>{errors3.password?.message}</p>
            </div>
            <div className={styles.login}>
              <ButtonBlack type="submit" text="LOG IN" />

              <p>
                Dont have account? <Link href="/sign">Sign up</Link>
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
              signInWithPopup(auth, provider)
                .then(() => {
                  if (auth.currentUser) {
                    toast.success(`Login successfully`, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    router.push("/");
                  }
                })
                .catch((err) => console.error(err));
            }}
          >
            Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
