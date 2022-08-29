import React, { useRef } from 'react';
import './Login.scss';
import LoginCall from '../../store/CallApi.js';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [nav, setNav] = useState("Login")

    const FormLogin = () => {
        const email = useRef();
        const password = useRef();
        const [state, dispatch] = useContext(AuthContext);
        const { isFetching } = state;

        const handleLogin = (e) => {
            e.preventDefault();
            LoginCall({ email: email.current.value, password: password.current.value }, dispatch);
        };

        const handleRegister = (e) => {
            e.preventDefault();
            setNav("Register")
        }

        return (
            <form action="" className="formLogin" onSubmit={handleLogin}>
                <div className="title">Đăng nhập HaVanDuoc</div>
                <input type="email" placeholder="Email" required ref={email} />
                <input type="password" placeholder="Mật khẩu" required minLength={6} ref={password} />
                <button type="submit" className="button loginBtn">
                    {isFetching ? 'Đang tải...' : 'Đăng nhập'}
                </button>
                <div className="forgotPasswordLink">Quên mật khẩu?</div>
                <hr />
                <button className="button registerBtn" onClick={handleRegister}>Tạo tài khoản mới</button>
            </form>
        );
    };

    const FormRegister = () => {
        const firstname = useRef();
        const lastname = useRef();
        const username = useRef()
        const email = useRef();
        const password = useRef();
        const confirmPassword = useRef();

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (password.current.value !== confirmPassword.current.value) {
                password.current.setCustomValidity("Mật khẩu không trùng khớp!")
            } else {
                const user = {
                    firstname: firstname.current.value,
                    lastname: lastname.current.value,
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                }
                try {
                    await axios.post("/auth/register", user)

                } catch (error) {
                    console.log(error)
                }
            }
        }

        return (
            <form action="" className="formRegister" onSubmit={handleSubmit}>
                <div className="title">Đăng ký tài khoản</div>
                <input type="firstname" placeholder="Họ" required ref={firstname} />
                <input type="lastname" placeholder="Tên" required ref={lastname} />
                <input type="username" placeholder="Tên người dùng" required ref={username} />
                <input type="email" placeholder="Email" required ref={email} />
                <input type="password" placeholder="Mật khẩu" required minLength={6} ref={password} />
                <input type="password" placeholder="Nhập lại mật khẩu" required minLength={6} ref={confirmPassword} />
                <button type="submit" className="button loginBtn">
                    Đăng ký
                </button>
                <div className="loginLink" onClick={nav => setNav("Login")}>Đăng nhập vào HaVanDuoc</div>
            </form>
        );
    };

    return (
        <div className="hvdLogin">
            <div className="wrapper">
                <div className="leftPage">
                    <div className="logo">HaVanDuoc</div>
                    <div className="slogan">Connect with friends and the world</div>
                </div>
                <div className="rightPage">
                    {nav === "Login" ? <FormLogin /> : <FormRegister />}
                </div>
            </div>
        </div>
    );
};

export default Login;
