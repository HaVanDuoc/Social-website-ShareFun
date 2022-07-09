import React from "react";
import "./Avatar.scss";

import { Link } from "react-router-dom";

const Avatar = (props) => {
    const { src, children, ...otherProps } = props;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    // const handleClick = () => {
    //     window.location = PF + "profile";
    // };

    return (
        <Link to="/profile">
            <div
                className="hvdAvatar"
                style={{ ...otherProps }}
                // onClick={handleClick}
            >
                <div className="avatarWrapper">
                    <img src={PF + src} alt="avatar" />
                </div>
            </div>
        </Link>
    );
};

export default Avatar;
