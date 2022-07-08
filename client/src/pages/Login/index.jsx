import React from "react";
import "./Login.scss";

import { FormLogin } from "../../components/";

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
                    <FormLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
