import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../utilities/client";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const validation = () => {
    let RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return RegExp.test(email) & (password.length > 7);
  };

  const validateEmail = (email) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      setEmail(email);
      setEmailError("");
      return true;
    } else {
      setEmail(email);
      setEmailError("Please enter a valid email address.");

      return false;
    }
  };

  const validatePassword = (password) => {
    if (password.length >= 8) {
      setPassword(password);
      setPassError("");
      return true;
    } else {
      setPassword(password);

      setPassError("Password should be atleast 8 chharacters.");

      return false;
    }
  };
  const check = async () => {
    console.log("running");
    const resp = await axios.get("http://192.168.1.108:8000");
    console.log(resp.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent page reload

    if (validation()) {
      try {
        console.log("running");
        const res = await axios.post(loginUser, {
          email,
          password,
        });
        console.log(res.data);
        if (res.data.success) {
          // handle successfull login
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form method="post">
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => validateEmail(e.target.value)}
                  id="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              {emailError !== "" && <p className="text-danger">{emailError}</p>}
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  minimum={8}
                  type="password"
                  value={password}
                  onChange={(e) => validatePassword(e.target.value)}
                  id="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              {passError !== "" && (
                <p className="text-danger mb-2">{passError}</p>
              )}
              <div className="forget">
                <label for="">
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
              <button type="submit" onClick={handleSubmit}>
                Log in
              </button>
              <div className="register">
                <p>
                  <Link to="#">Forgot Password</Link>
                </p>
                <p>
                  Don't have a account <Link href="#">Register</Link>
                </p>
              </div>
            </form>
          </div>
          <p className="btn" onClick={() => check()}>
            check
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;
