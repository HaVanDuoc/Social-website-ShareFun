import React, { useState } from "react";
import FieldInput from "./FieldInput";
import "./FormLogin.scss";

const FormLogin = () => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const ArrayInputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Email hoặc số điện thoại",
            errorMessage:
                "Email hoặc số di động bạn nhập không kết nối với tài khoản nào.",
            require: "true",
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Mật khẩu",
            require: "true",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <form
            action=""
            id="formLogin"
            className="formLogin"
            onSubmit={handleSubmit}
        >
            <div className="title">Đăng nhập HaVanDuoc</div>

            {ArrayInputs.map((input) => (
                <FieldInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
            ))}

            <button type="submit" className="button loginBtn">
                Đăng nhập
            </button>

            <div className="forgotPasswordLink">Quên mật khẩu?</div>
            <hr />
            <button className="button registerBtn">Tạo tài khoản mới</button>
        </form>
    );
};

export default FormLogin;
