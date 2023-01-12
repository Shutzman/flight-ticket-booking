import React from "react";
import SignupStyles from "../Signup/Signup.module.css";
import { v4 as uuid } from "uuid";
import axios from "axios";

export function Signup(props) {
  const [formData, setformData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      id: uuid(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    axios
      .post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // fetch("/users",{
    //     method:"POST",
    //     body:JSON.stringify(data),
    //     headers:{"Content-type":"Application/json"}
    // })
    setformData({
      name: "",
      email: "",
      password: "",
    });
  };
  const { name, email, password } = formData;
  return (
    <div className={SignupStyles.Container}>
      <div className={SignupStyles.SignupDiv}>
        <h1>Create an account</h1>
        <div>
          <form className={SignupStyles.FormBox}>
            <div className={SignupStyles.InputBox}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your name"
              />
            </div>
            <div className={SignupStyles.InputBox}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your email"
              />
            </div>
            <div className={SignupStyles.InputBox}>
              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your password"
              />
            </div>
            <div className={SignupStyles.RegisterBox}>
              <button onClick={(e) => handleSubmit(e)}>Register</button>
            </div>
          </form>
          <div style={{ marginTop: 20 }}>
            <button onClick={(e) => props.setLoginMode(true)}>
              Switch to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
