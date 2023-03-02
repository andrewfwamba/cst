import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section>
        <div class="form-box">
          <div class="form-value">
            <form action="">
              <h2>Login</h2>
              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" />
                <label for="">Email</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" />
                <label for="">Password</label>
              </div>
              <div class="forget">
                <label for="">
                  <input type="checkbox" />
                  Remember Me <Link to="#">Forget Password</Link>
                </label>
              </div>
              <button>Log in</button>
              <div class="register">
                <p>
                  Don't have a account <Link href="#">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}

export default Login;
