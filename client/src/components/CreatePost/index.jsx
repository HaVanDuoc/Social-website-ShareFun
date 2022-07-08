import React from "react";
import "./CreatePost.scss";

import { Avatar } from "../../components";

import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoIcon from "@mui/icons-material/Photo";
import MoodIcon from "@mui/icons-material/Mood";

const CreatePost = () => {
    return (
        <div className="hvdCreatePost">
            <div className="createPostWrapper">
                <div className="childTop">
                    <div className="wrapperIcon">
                        <Avatar border="1px solid lightgray">
                            <img src="/assets/avatar/avt.jpg" alt="avatar" />
                        </Avatar>
                    </div>
                    <input type="text" placeholder="Bạn đang nghĩ gì thế?" />
                </div>
                <div className="childBottom">
                    <div className="item liveVideo">
                        <i>
                            <VideoCameraFrontIcon />
                        </i>
                        <span>Video trực tiếp</span>
                    </div>
                    <div className="item photo">
                        <i>
                            <PhotoIcon />
                        </i>
                        <span>Ảnh/video</span>
                    </div>
                    <div className="item emotion">
                        <i>
                            <MoodIcon />
                        </i>
                        <span>Cảm xúc/hoạt động</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
