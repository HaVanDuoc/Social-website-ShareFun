import React, { useEffect, useState } from "react";
import "./Posts.scss";
import Avatar from "../Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { format } from 'timeago.js';
import { Link } from "react-router-dom";

const Posts = ({ post }) => {
    const [countfavourite, setCountFavourite] = useState(
        post.favourites.length
    );
    const [isFavourite, setIsFavourite] = useState(false);
    const [user, setUser] = useState({});

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const handleFavourite = () => {
        setCountFavourite(
            isFavourite ? countfavourite - 1 : countfavourite + 1
        );
        setIsFavourite(!isFavourite);
    };

    return (
        <div className="hvdPosts">
            <div className="postWrapper">
                <div id="post">
                    <div className="post__header">
                        <div className="post__poster">
                            <Avatar
                                src={
                                    user.avatar ||
                                    "images/avatar/noAvatar.png"
                                }
                            />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div className="post__username">
                                    {user.firstname + " " + user.lastname}
                                </div>
                                <div className="post__date">
                                    {format(post.createdAt)}
                                </div>
                            </div>
                        </div>
                        <div className="post__following">Theo Dõi</div>
                    </div>

                    <div className="post__body">
                        <div className="post__title">{post.title}</div>
                        <div className="post__content">
                            <div>{post.desc}</div>
                            <div>
                                <img src={PF + post.img} alt="" />
                            </div>
                        </div>
                        <div className="post__topic">{post.tag}</div>
                    </div>

                    <div className="post__footer">
                        <div className="showInteractive">
                            <div className="like">
                                <i className="favoriteIcon">
                                    <FavoriteIcon />
                                </i>
                                <span>
                                    {countfavourite === 0
                                        ? ""
                                        : countfavourite + " yêu thích"}
                                </span>
                            </div>

                            <div className="comment">
                                <i className="commentIcon">
                                    <ChatBubbleOutlineIcon />
                                </i>
                                <span>
                                    {post.comments === 0
                                        ? ""
                                        : post.comments + " bình luận"}
                                </span>
                            </div>

                            <div className="share">
                                <i className="shareIcon">
                                    <ReplyIcon />
                                </i>
                                <span>
                                    {post.shares === 0
                                        ? ""
                                        : post.shares + " chia sẻ"}
                                </span>
                            </div>

                            <div className="view">
                                <i className="viewIcon">
                                    <VisibilityIcon />
                                </i>
                                <span>{post.views}</span>
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
                </div>
            </div>
        </div>
    );
};

export default Posts;
