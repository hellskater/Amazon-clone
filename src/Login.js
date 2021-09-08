import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
          <h1>Sign-in</h1>

          <form action="">
              <h5>E-mail</h5>
              <input type="text" name="" id="" />
          </form>
      </div>
    </div>
  );
}

export default Login;
