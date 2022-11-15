import React, { useState } from "react";
import "./Sidebar.scss";

// Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DataSidebar } from "./DataSidebar";

const Sidebar = () => {
    const [numberOfElement, setNumberOfElement] = useState(10);
    const slice = DataSidebar.NavLinks.slice(0, numberOfElement);

    const handleClick = () => {
        setNumberOfElement(numberOfElement + 10);

        // document.getElementsByClassName("sidebarSeeMoreButton") deliver a nodeList should provide the position in the list
        if (numberOfElement >= slice.length) {
            document.getElementsByClassName(
                "sidebarSeeMoreButton"
            )[0].style.display = "none";
            console.log("display: 'none'");
        }
    };

    return (
        <div className="hvdSidebar border-radius">
            <div className="title">Gợi ý</div>
            <ul className="sidebarNavLink">
                {slice.map((item, index) => {
                    var Item = (
                        <li className="navItem" key={index}>
                            <a href={item.path}>
                                <i>{item.icon}</i>
                                <span>{item.name}</span>
                            </a>
                        </li>
                    );
                    return Item;
                })}

                <div className="sidebarSeeMoreButton" onClick={handleClick}>
                    <i>
                        <ArrowDropDownIcon />
                    </i>
                    <span>Xem thêm</span>
                </div>
            </ul>

            <footer className="sidebarFooter">
                <ul className="sidebarFooterLink">
                    {DataSidebar.FooterLinks.map((item, index) => (
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
