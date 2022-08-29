import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  
  return (
    <div>
      <input data-cy="login-email" type="email" placeholder="Enter Your Email" />
<br/>
      <input data-cy="login-password" type= "password" placeholder="Enter Your Password" />
      <br/>

      <button data-cy="login-submit">
        Login
      </button>
    </div>
  );
};

export default Login;
