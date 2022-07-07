import React from "react";
import { Panel } from "../../components";
import "./ProfileLayout.scss";

const ProfileLayout = ({ children }) => {
    return (
        <div className="hvdProfileLayout">
            <div className="panelPage">
                <Panel />
            </div>
            <div className="mainPage">{children}</div>
        </div>
    );
};

export default ProfileLayout;
