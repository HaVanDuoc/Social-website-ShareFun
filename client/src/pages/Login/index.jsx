import React, { useRef } from "react";
import './Login.scss'

const Login = () => {

  const FormLogin = () => {
    const email = useRef()
    const password = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <form
        action=""
        className="formLogin"
        onSubmit={handleSubmit}
      >
        <div className="title">Đăng nhập HaVanDuoc</div>
        <input type="email" placeholder="Email" required ref={email} />
        <input type="password" placeholder="Password" required minLength={6} ref={password} />
        <button type="submit" className="button loginBtn">Đăng nhập</button>
        <div className="forgotPasswordLink">Quên mật khẩu?</div>
        <hr />
        <button className="button registerBtn">Tạo tài khoản mới</button>
      </form>
    )
  }

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
