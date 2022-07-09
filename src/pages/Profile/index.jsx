import React from "react";
import "./Profile.scss";

import { CreatePost, Posts } from "../../components/";
import { PostData } from "../../components/Feed/Data";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="hvdProfile">
            <div className="headerProfile">
                <div className="coverImage">
                    <img
                        src={
                            PF +
                            "/images/profile/Genshin Impact Wallpaper - 4K.jpg"
                        }
                        alt=""
                    />
                </div>
                <div className="infoUser">
                    <div className="avatarImage">
                        <img src={PF + "/images/avatar/avt.jpg"} alt="" />
                    </div>
                    <div className="userName">Hà Văn Được</div>
                    <div className="signature">Hello! I'm Duoc.</div>
                </div>
                <div className="activityStatistics">
                    <div className="wrapperItem">
                        <span>5</span>
                        <span>Bài viết</span>
                    </div>
                    <div className="wrapperItem">
                        <span>5</span>
                        <span>Theo dõi</span>
                    </div>
                    <div className="wrapperItem">
                        <span>5</span>
                        <span>Người theo dõi</span>
                    </div>
                    <div className="wrapperItem">
                        <span>5</span>
                        <span>Được thích</span>
                    </div>
                </div>
            </div>
            <div className="bodyProfile">
                <div className="mainPage">
                    <CreatePost />
                    {PostData.map((post) => (
                        <Posts key={post.id} post={post} />
                    ))}
                </div>
                <div className="subPage">
                    <div className="wrapperItem achievementProfile">
                        <div className="title">Hà Văn Được</div>
                        <div className="item">
                            <div className="name">Số ngày hoạt động</div>
                            <div className="value">614</div>
                        </div>
                        <div className="item">
                            <div className="name">Danh hiệu</div>
                            <div className="value">Người nổi tiếng</div>
                        </div>
                        <div className="item">
                            <div className="name">Số thành tựu đã đạt</div>
                            <div className="value">625</div>
                        </div>
                    </div>
                    <div className="wrapperItem introduceProfile">
                        <div className="title">Giới thiệu</div>
                        <div className="item">Thêm tiểu sử</div>
                        <div className="item">Chỉnh sửa chi tiết</div>
                        <div className="item">Thêm sở thích</div>
                        <div className="item">Thêm nội dung đáng chú ý</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
