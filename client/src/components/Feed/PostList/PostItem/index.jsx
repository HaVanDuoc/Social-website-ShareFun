import axios from 'axios';
import { format } from 'timeago.js';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import './PostItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectorCurrentUser } from '../../../../redux/reducers/AuthReducer';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import VisibilityIcon from '@mui/icons-material/Visibility';

const PostItem = ({ post }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const currentUser = useSelector(selectorCurrentUser);
    const dispatch = useDispatch();
    const [isFollow, setFollow] = useState(post?.isFollow);
    const [username, setUsername] = useState(post?.username);
    const [avatar, setAvatar] = useState(post.avatar);
    const [createdAt, setCreatedAt] = useState(post.createdAt);
    const [favorite, setFavorite] = useState(post.favorite);
    const [title, setTitle] = useState(post.title)
    const [tag, setTag] = useState(post.tag)
    const [view, setView] = useState(post.view);
    const [isFavourite, setIsFavourite] = useState(post.favorite);
    const [comment, setComment] = useState(post.comment);
    const [share, setShare] = useState(post.shared);

    const PostHeader = () => {
        const handleClickFollow = async () => {
            if (!currentUser) {
                dispatch({ type: 'OPEN_MODAL_LOGIN' });
                return;
            }

            const token = localStorage.getItem('token');

            const option = {
                method: 'put',
                url: `/user/${post.author.username}/follow`,
                data: { currentUsername: currentUser.user.username },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            await axios(option);
            setFollow(!isFollow);
        };

        const ButtonFollow = () => {
            return (
                <div className="post__following" onClick={handleClickFollow}>
                    Theo Dõi
                </div>
            );
        };

        return (
            <div className="post__header">
                <Link to={'/profile/' + username}>
                    <div className="post__poster">
                        <Box display="flex" justifyContent="center" alignContent="center">
                            <Avatar
                                src={post ? PF + avatar : PF + 'images/noUser.png'}
                                sx={{ width: 40, height: 40 }}
                            />
                        </Box>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '0 10px',
                            }}
                        >
                            <div className="post__username">{username}</div>
                            <div className="post__date">{format(createdAt)}</div>
                        </div>
                    </div>
                </Link>
                {post.isFollow ? <React.Fragment /> : <ButtonFollow />}
            </div>
        );
    };

    const PostBody = () => (
        <div className="post__body">
            <div className="post__title">{title}</div>
            <div className="post__content">
                <div>{post.desc}</div>
                <div>
                    <img src={PF + post.content} alt="" />
                </div>
            </div>
            <div className="post__topic">{tag}</div>
        </div>
    );

    const PostFooter = () => {

        const handleFavourite = () => {
            try {
                // axios.put('/posts/' + post._id + '/like', { userId: currentUser._id });
                setIsFavourite(!isFavourite);
                setFavorite(post.favourites.length);
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <div className="post__footer">
                <div className="showInteractive">
                    <div className="like" style={favorite > 0 ? { display: 'flex' } : { display: 'none' }}>
                        <i className="favoriteIcon">
                            <FavoriteIcon />
                        </i>
                        <span>{favorite}</span>
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
                        <span>{share}</span>
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

    return (
        <div className="hvdPosts">
            <div className="postWrapper">
                <div id="post">
                    <PostHeader />
                    <PostBody />
                    <PostFooter />
                </div>
            </div>
        </div>
    );
};

export default PostItem;
