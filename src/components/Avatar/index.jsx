import React from "react";
import "./Avatar.scss";

const Avatar = (props) => {
    const { children, ...otherProps } = props;
    return (
        <div className="hvdAvatar" style={{ ...otherProps }}>
            <div className="avatarWrapper">{children}</div>
        </div>
    );
};

export default Avatar;
