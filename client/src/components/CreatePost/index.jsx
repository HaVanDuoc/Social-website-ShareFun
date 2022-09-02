import React from "react";
import "./CreatePost.scss";

import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoIcon from "@mui/icons-material/Photo";
import MoodIcon from "@mui/icons-material/Mood";
import { Avatar, Box } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const CreatePost = () => {
    const [state] = useContext(AuthContext)
    const { user } = state
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="hvdCreatePost">
            <div className="createPostWrapper">
                <div className="childTop">
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
                        <Avatar src={user ? user.avatar : `${PF}images/noUser.png`} sx={{ width: 40, height: 40 }} />
                    </Box>
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
