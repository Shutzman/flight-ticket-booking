import React, { useState } from "react";
import { Login } from "../../Components/Login/Login";
import { Signup } from "../../Components/Signup/Signup";
import HomeStyles from "../Home Page/Home.module.css";
import { useDispatch, useSelector } from "react-redux";

export function Home() {
  const [loginMode, setLoginMode] = useState(true);

  const { auth } = useSelector((state) => state);

  if (auth.status) {
    return null;
  }

  if (loginMode && !auth.status) {
    return (
      <div className={HomeStyles.mainContainer}>
        <Login setLoginMode={setLoginMode} />
      </div>
    );
  }
  return (
    <div className={HomeStyles.mainContainer}>
      <Signup setLoginMode={setLoginMode} />
    </div>
  );
}
