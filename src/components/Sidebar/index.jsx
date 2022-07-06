import React from "react";
import "./Sidebar.scss";

// Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FooterLinks, NavLinks } from "./Array";

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
