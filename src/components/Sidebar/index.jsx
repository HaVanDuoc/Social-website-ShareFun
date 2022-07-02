import React from "react";
import "./Sidebar.scss";

// Icons
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EventIcon from "@mui/icons-material/Event";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavLinks = [
    {
        path: "#",
        icon: <RssFeedIcon />,
        name: "Gần đây nhất",
    },
    {
        path: "#",
        icon: <PeopleOutlineIcon />,
        name: "Tìm kiếm bạn bè",
    },
    {
        path: "#",
        icon: <EmojiFlagsIcon />,
        name: "Trang",
    },
    {
        path: "#",
        icon: <GroupsIcon />,
        name: "Nhóm",
    },
    {
        path: "#",
        icon: <BookmarkAddedIcon />,
        name: "Đã lưu",
    },
    {
        path: "#",
        icon: <CelebrationIcon />,
        name: "Kỷ niệm",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    // ------------------------------------
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
    {
        path: "#",
        icon: <EventIcon />,
        name: "Sự kiện",
    },
];

const FooterLinks = [
    { path: "#", nane: "Quyền riêng tư" },
    { path: "#", nane: "Điều khoản" },
    { path: "#", nane: "Quảng cáo" },
    { path: "#", nane: "Lựa chọn quảng cáo" },
    { path: "#", nane: "Cookie" },
    { path: "#", nane: "Xem thêm" },
    { path: "#", nane: "HaVanDuoc @ 2022" },
];

const Sidebar = () => {
    return (
        <div className="hvdSidebar">
            <div className="title">Gợi ý</div>
            <ul className="sidebarNavLink">
                {NavLinks.map((item, index) => {
                    if (index < 10) {
                        var Item = (
                            <li className="navItem" key={index}>
                                <a href={item.path}>
                                    <i>{item.icon}</i>
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        );
                    }
                    return Item;
                })}
            </ul>
            <div className="sidebarNavButton">
                <i>
                    <ArrowDropDownIcon />
                </i>
                <span>Xem thêm</span>
            </div>
            <footer className="sidebarFooter">
                <ul className="sidebarFooterLink">
                    {FooterLinks.map((item, index) => (
                        <li className="footerItem" key={index}>
                            <a href={item.path}>
                                <span>{item.nane}</span>
                            </a>
                            <span>&nbsp; - &nbsp;</span>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    );
};

export default Sidebar;
