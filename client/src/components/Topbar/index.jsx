import React from "react";
import "./Topbar.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";
import AccountUser from "./AccountUser";

const TopBarRightItems = [
    {
        tippyContent: "Messenger",
        badgeContent: 0,
        icon: <ChatBubbleOutlineIcon />,
    },
    {
        tippyContent: "Lời mời kết bạn",
        badgeContent: 1,
        icon: <PersonAddIcon />,
    },
    {
        tippyContent: "Thông báo",
        badgeContent: 3,
        icon: <NotificationsNoneIcon />,
    },
];

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
                    {TopBarRightItems.map((item, index) => (
                        <Tippy content={item.tippyContent} key={index}>
                            <div className="wrapperItem">
                                <div
                                    className="badgeItem"
                                    style={
                                        item.badgeContent === 0
                                            ? { display: "none" }
                                            : { display: "flex" }
                                    }
                                >
                                    {item.badgeContent}
                                </div>
                                {item.icon}
                            </div>
                        </Tippy>
                    ))}

                    <div className="accountIcon">
                        <AccountUser />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
