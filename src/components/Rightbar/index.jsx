import React from "react";
import "./Rightbar.scss";

import CampaignIcon from "@mui/icons-material/Campaign";
// import Banner from "../Banner";

const Rightbar = () => {
    return (
        <div className="hvdRightBar">
            <div className="rightbarWrapper">
                {/* <div className="rightbarBanner"><Banner /></div> */}
                <div className="rightbarComponent officialInformation">
                    <div className="rightbarTitle">Thông tin chính thức</div>
                    <div className="rightbarItem">
                        <i style={{ color: "dodgerblue" }}>
                            <CampaignIcon />
                        </i>
                        <span>Quy tắc cộng đồng</span>
                    </div>
                </div>
                <div className="rightbarComponent hotTopic">
                    <div className="rightbarTitle">Chủ đề hot</div>

                    <div className="rightbarItem hotTopicItem">
                        <div className="name">#xuhuong</div>
                        <div className="count">10k bài đăng</div>
                    </div>
                    <div className="rightbarItem hotTopicItem">
                        <div className="name">#xuhuong</div>
                        <div className="count">10k bài đăng</div>
                    </div>
                    <div className="rightbarItem hotTopicItem">
                        <div className="name">#xuhuong</div>
                        <div className="count">10k bài đăng</div>
                    </div>
                    <div className="rightbarItem hotTopicItem">
                        <div className="name">#xuhuong</div>
                        <div className="count">10k bài đăng</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
