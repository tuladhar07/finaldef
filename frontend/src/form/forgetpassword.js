import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./login.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAPI = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("/api/forget-password", { email })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="text-center m-5-auto">
        <h2 className="signin_tit">Password Reset</h2>
        <form className="login_f" onSubmit={handleAPI}>
          <p>
            <label>Enter your email address</label>
            <br />
            <input type="email" name="email" required onChange={handleEmail} />
          </p>

          <Link to="/reset-password">
            <button id="sub_btn" type="submit" className="btn_login">
              Submit
            </button>
          </Link>
        </form>
        <footer>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </>
  );
};
export default ForgetPassword;
