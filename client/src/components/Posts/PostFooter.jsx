import axios from 'axios';
import React, { useEffect, useState } from 'react';
// Icon Material UI
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useFetchLoggedInUser from '../../hooks/useFetchLoggedInUser';

const PostFooter = ({ post }) => {
    const [favourite, setFavourite] = useState(post.favourites.length);
    const [isFavourite, setIsFavourite] = useState(false);
    const [comment, setComment] = useState(post.comments.length);
    const [share, setShare] = useState(post.shares.length);
    const [view, setView] = useState(post.views.length);

    // User logged
    const currentUser = useFetchLoggedInUser();

    const handleFavourite = () => {
        try {
            axios.put('/posts/' + post._id + '/like', { userId: currentUser._id });
            setIsFavourite(!isFavourite);
            setFavourite(post.favourites.length);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="post__footer">
            <div className="showInteractive">
                <div className="like" style={favourite > 0 ? { display: 'flex' } : { display: 'none' }}>
                    <i className="favoriteIcon">
                        <FavoriteIcon />
                    </i>
                    <span>{favourite}</span>
                </div>

                <div className="comment" style={comment > 0 ? { display: 'flex' } : { display: 'none' }}>
                    <i className="commentIcon">
                        <ChatBubbleOutlineIcon />
                    </i>
                    <span>{comment}</span>
                </div>

                <div className="share" style={share > 0 ? { display: 'flex' } : { display: 'none' }}>
                    <i className="shareIcon">
                        <ReplyIcon />
                    </i>
                    <span> chia sẻ</span>
                </div>

                <div className="view">
                    <i className="viewIcon">
                        <VisibilityIcon />
                    </i>
                    <span>{view}</span>
                </div>
            </div>

            <div className="postInteraction">
                <div className="like" onClick={handleFavourite}>
                    <i className="favoriteIcon">
                        <FavoriteIcon />
                    </i>
                    <span>Yêu thích</span>
                </div>
                <div className="comment">
                    <i className="commentIcon">
                        <ChatBubbleOutlineIcon />
                    </i>
                    <span>Bình luận</span>
                </div>
                <div className="share">
                    <i className="shareIcon">
                        <ReplyIcon />
                    </i>
                    <span>Chia sẻ</span>
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
