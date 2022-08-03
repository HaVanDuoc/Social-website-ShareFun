import React, { useEffect, useState } from "react";
import "./Profile.scss";

import { Feed } from "../../components/";
import axios from "axios";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=havanduoc`);
            setUser(res.data);
        };
        fetchUser();
    }, []);

    return (
        <div className="hvdProfile">
            <div className="headerProfile">
                <div className="coverImage">
                    <img src={PF + user.coverPicture} alt="" />
                </div>
                <div className="infoUser">
                    <div className="avatarImage">
                        <img
                            src={
                                PF + user.avatar ||
                                PF + "images/avatar/noAvatar.png"
                            }
                            alt="avatar"
                        />
                    </div>
                    <div className="userName">
                        {user.firstname + " " + user.lastname}
                    </div>
                    <div className="signature">{user.signature}</div>
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
                    <Feed username="havanduoc" />
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
