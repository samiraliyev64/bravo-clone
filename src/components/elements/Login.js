import React, { useState } from "react";
import "../../assets/scss/Form.scss";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username);
  };
  const navigate = useNavigate();

  const registration = () => {
    navigate("/registration");
  };

  return (
    <div className="container login">
      <div class="box">
        <span class="borderLine"></span>
        <form action="" onSubmit={handleLogin}>
          <h2>Daxil Ol</h2>
          <div class="inputBox">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
              required="required" />
            <span>İstifadəçi adı </span>
            <i></i>
          </div>
          <div class="inputBox">
            <input type="password" required="required" />
            <span>Şifrə</span>
            <i></i>
          </div>
          <div class="links">
            <a href="#">Şifrəni unutmusunuz?</a>
            <a onClick={registration} href="#">
              Qeydiyyat
            </a>
          </div>
          <button type="submit">Daxil Ol</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
