import React from 'react';
import './NewPostCard.scss';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import VideocamIcon from '@mui/icons-material/Videocam';

const NewPostCard = () => {
    return (
        <div className="rightBarComponent">
            <div className="NewPostCard">
                <div className="rightBarTitle">Mau đến gửi bài nào</div>
                <div className="grid">
                    <div className="item">
                        <div className="post-icon icon-1">
                            <DriveFileRenameOutlineIcon />
                        </div>
                        <span>Bài viết</span>
                    </div>
                    <div className="item">
                        <div className="post-icon icon-2">
                            <WallpaperIcon />
                        </div>
                        <span>Hình ảnh</span>
                    </div>
                    <div className="item">
                        <div className="post-icon icon-3">
                            <VideocamIcon />
                        </div>
                        <span>Video</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPostCard;
