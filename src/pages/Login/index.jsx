import React from "react";
import "./Login.scss";

const Login = () => {
    return (
        <div className="hvdLogin">
            <div className="wrapper">
                <div className="leftPage">
                    <div className="logo">HaVanDuoc</div>
                    <div className="slogan">
                        Học tài thi phận - Cố hết sức - Không hối hận
                    </div>
                </div>
                <div className="rightPage">
                    <form className="formLogin">
                        <input
                            type="text"
                            placeholder="Email hoặc số điện thoại"
                        />
                        <input type="password" placeholder="Mật khẩu" />
                        <button type="submit" className="loginBtn">
                            Đăng nhập
                        </button>
                        <div className="forgotPasswordLink">Quên mật khẩu?</div>
                        <hr />
                        <button className="registerBtn">
                            Tạo tài khoản mới
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
