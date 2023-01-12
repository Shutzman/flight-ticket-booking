import React from "react";
import LoginStyles from "../Login/Login.module.css";
import { loginSuccess, loginUnsuccess } from "../../Redux/Auth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Login(props) {
  const [loginData, setloginData] = React.useState({
    email: "",
    password: "",
  });
  const [login, setlogin] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/login", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response.data);

        setlogin(true);
        dispatch(loginSuccess(response.data));
        auth.status ? navigate("/search") : navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const { email, password } = loginData;
  return (
    <div className={LoginStyles.Container}>
      <div className={LoginStyles.LoginDiv}>
        <h1>Login</h1>
        <form action="" className={LoginStyles.FormBox}>
          <div className={LoginStyles.InputBox}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={LoginStyles.InputBox}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <button onClick={(e) => handleLogin(e)}>Login</button>
          </div>
        </form>
        <div>
          <button onClick={(e) => props.setLoginMode(false)}>
            Switch to register
          </button>
        </div>
      </div>
    </div>
  );
}
