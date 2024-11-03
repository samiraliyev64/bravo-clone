import React, { useState } from "react";
import "../../assets/scss/Form.scss";
import { useNavigate } from "react-router-dom";

const Registration = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister({ username, password });
  };

  const registration = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="registration">
        <div class="box">
          <span class="borderLine"></span>
          <form action="" onSubmit={handleRegister}>
            <h2>Qeydiyyat</h2>
            <div class="inputBox">
              <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
              <span>İstifadəçi adı </span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
              <span>Şifrə</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="password" required="required" />
              <span>Şifrənin təsdiqi</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="email" required="required" />
              <span>E-Mail</span>
              <i></i>
            </div>
            <div class="links">
              <a href="#">Hesabınız var?</a>
              <a onClick={registration} href="#">
                Daxil ol
              </a>
            </div>
            <button type="submit">
              Qeydiyyat
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
