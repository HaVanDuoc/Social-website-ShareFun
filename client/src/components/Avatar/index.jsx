import React from "react";
import "./Avatar.scss";


const Avatar = (props) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { src, children, ...otherProps } = props;

    return (
            <div className="hvdAvatar" style={{ ...otherProps }}>
                <div className="avatarWrapper">
                    <img src={PF + src} alt="avatar" />
                </div>
            </div>
    );
};

export default Avatar;
