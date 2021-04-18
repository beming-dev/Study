import React from "react";
import "../css/login.css";
import "../javascript/event.js";

const onLoginBackClick = () => {
  const loginBody = document.querySelector(".login-body");
  loginBody.style.display = "none";
};

class Login extends React.Component {
  render() {
    return (
      <div className="login-body">
        <div className="login-container" onClick={onLoginBackClick}></div>
        <div className="login-box"></div>
      </div>
    );
  }
}

export default Login;
