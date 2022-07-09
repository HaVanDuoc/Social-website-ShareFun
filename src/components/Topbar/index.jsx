import React from "react";
import "./Topbar.scss";

// Components
import { Avatar } from "../../components";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div className="hvdTopBar">
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/">
                        <div className="logo">HaVanDuoc</div>
                    </Link>
                </div>
                <div className="topbarCenter">
                    <div className="topbarSearch">
                        <div className="topbarSearchBtn wrapperIcon">
                            <SearchIcon />
                        </div>
                        <input
                            className="topbarSearchInput"
                            type="text"
                            placeholder="Tìm kiếm"
                        />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="wrapperIcon messagesIcon hoverIcon">
                        <ChatBubbleOutlineIcon />
                    </div>
                    <div className="wrapperIcon friendsIcon hoverIcon">
                        <PersonOutlineIcon />
                    </div>
                    <div className="wrapperIcon NotificationsIcon hoverIcon">
                        <div className="badgeIcon">2</div>
                        <NotificationsNoneIcon />
                    </div>
                    <div className="accountIcon">
                        <Avatar src="/images/avatar/avt.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
