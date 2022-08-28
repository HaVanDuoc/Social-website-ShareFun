import React, { useRef } from 'react';
import './Login.scss';
import LoginCall from '../../store/CallApi.js';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';

const FormLogin = () => {
  const email = useRef();
  const password = useRef();
  const [state, dispatch] = useContext(AuthContext);
  const { user, isFetching, error } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };

  return (
    <form action="" className="formLogin" onSubmit={handleSubmit}>
      <div className="title">Đăng nhập HaVanDuoc</div>
      <input type="email" placeholder="Email" required ref={email} />
      <input type="password" placeholder="Password" required minLength={6} ref={password} />
      <button type="submit" className="button loginBtn">
        {isFetching ? 'Đang tải...' : 'Đăng nhập'}
      </button>
      <div className="forgotPasswordLink">Quên mật khẩu?</div>
      <hr />
      <button className="button registerBtn">Tạo tài khoản mới</button>
    </form>
  );
};

const Login = () => {
  return (
    <div className="hvdLogin">
      <div className="wrapper">
        <div className="leftPage">
          <div className="logo">HaVanDuoc</div>
          <div className="slogan">Connect with friends and the world</div>
        </div>
        <div className="rightPage">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
