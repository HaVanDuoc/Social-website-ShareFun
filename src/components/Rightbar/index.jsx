import React from "react";
import "./Rightbar.scss";

// data
import { DataHotTopic, DataOfficialInformation } from "./Data";

const Rightbar = () => {
    return (
        <div className="hvdRightBar">
            <div className="rightbarWrapper">
                {/* <div className="rightbarBanner"><Banner /></div> */}
                <div className="rightbarComponent officialInformation">
                    <div className="rightbarTitle">Thông tin chính thức</div>
                    {DataOfficialInformation.map((item) => (
                        <div className="rightbarItem" key={item.id}>
                            <i style={{ color: "dodgerblue" }}>{item.icon}</i>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="rightbarComponent hotTopic">
                    <div className="rightbarTitle">Chủ đề hot</div>

                    {DataHotTopic.map((item) => (
                        <div
                            className="rightbarItem hotTopicItem"
                            key={item.id}
                        >
                            <div className="name">{item.name}</div>
                            <div className="count">{item.count}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
