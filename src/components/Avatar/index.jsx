import React from "react";
import { Route } from "react-router-dom";
import "./Avatar.scss";

const Avatar = (props) => {
    const { src, children, ...otherProps } = props;

    const handleClick = () => {
        window.location = "http://localhost:3000/profile";
    };

    return (
        <div
            className="hvdAvatar"
            style={{ ...otherProps }}
            onClick={handleClick}
        >
            <div className="avatarWrapper">
                <img src={src} alt="avatar" />
            </div>
        </div>
    );
};

export default Avatar;
