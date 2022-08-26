import React from "react";
import FormLogin from "../../components/FormLogin";
import './Login.scss'

const Login = () => {
  return (
    <div className="hvdLogin">
      <div className="wrapper">
        <div className="leftPage">
          <div className="logo">HaVanDuoc</div>
          <div className="slogan">
            Connect with friends and the world
          </div>
        </div>
        <div className="rightPage">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
