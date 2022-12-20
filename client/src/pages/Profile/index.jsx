import React, { useState } from 'react';
import './Profile.scss';
import { Feed } from '../../components/';
import { Avatar } from '@mui/material';
import { selectorCurrentUser } from '../../redux/reducers/AuthReducer';
import { selectorGetAllPosts } from '../../redux/reducers/PostReducer';
import { useSelector } from 'react-redux';

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const user = useSelector(selectorCurrentUser);
    const post = useSelector(selectorGetAllPosts);

    console.log(user.user);

    // console.log(post);

    const [username, setUsername] = useState(user.user.username);
    const [avatar, setAvatar] = useState(user.user.avatar);
    const [background, setBackground] = useState(user.user.background);
    const [firstName, setFirstName] = useState(user.user.firstName);
    const [lastName, setLastName] = useState(user.user.lastName);
    const [signature, setSignature] = useState(user.user.signature);
    const [like, setLike] = useState(user.user.like);
    const [follower, setFollower] = useState(user.user.follower);
    const [following, setFollowing] = useState(user.user.following);

    const [postLenght, setPostLenght] = useState(post.length);

    const HeaderProfile = () => {
        return (
            <div className="headerProfile">
                <div className="coverImage">
                    <img src={PF + background} alt="" />
                </div>
                <div className="infoUser">
                    <div className="avatarImage">
                        <Avatar src={PF + avatar} alt={username} sx={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="userName">{username}</div>
                    <div className="signature">{signature}</div>
                </div>
                <div className="activityStatistics">
                    <div className="wrapperItem">
                        <span>{postLenght || 0}</span>
                        <span>Bài viết</span>
                    </div>
                    <div className="wrapperItem">
                        <span>{following || 0}</span>
                        <span>Đang theo dõi</span>
                    </div>
                    <div className="wrapperItem">
                        <span>{follower || 0}</span>
                        <span>Người theo dõi</span>
                    </div>
                    <div className="wrapperItem">
                        <span>{like || 0}</span>
                        <span>Được thích</span>
                    </div>
                </div>
            </div>
        );
    };

    const AchievementProfile = () => {
        return (
            <div className="wrapperItem achievementProfile">
                <div className="title">{username}</div>
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
        );
    };

    const IntroduceProfile = () => {
        return (
            <div className="wrapperItem introduceProfile">
                <div className="title">Giới thiệu</div>
                <div className="item">Thêm tiểu sử</div>
                <div className="item">Chỉnh sửa chi tiết</div>
                <div className="item">Thêm sở thích</div>
                <div className="item">Thêm nội dung đáng chú ý</div>
            </div>
        );
    };

    return (
        <div className="hvdProfile">
            <HeaderProfile />
            <div className="bodyProfile">
                <div className="mainPage">
                    <Feed />
                </div>
                <div className="subPage">
                    <AchievementProfile />
                    <IntroduceProfile />
                </div>
            </div>
        </div>
    );
};

export default Profile;
