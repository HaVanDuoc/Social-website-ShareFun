import React, { Fragment } from "react";
import "./Posts.scss";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Posts = ({ post }) => {
    return (
        <div className="hvdPosts">
            <div className="postWrapper">
                <div id="post">
                    <div className="post__header">
                        <div className="post__poster">
                            <div className="post__avatar">
                                <img src="/assets/avatar/avt.jpg" alt="" />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div className="post__username">
                                    {post.username}
                                </div>
                                <div className="post__date">{post.date}</div>
                            </div>
                        </div>
                        <div className="post__following">Theo Dõi</div>
                    </div>

                    <div className="post__body">
                        <div className="post__title">{post.title}</div>
                        <div className="post__content">
                            <div>{post.desc}</div>
                            <div>
                                <img src={post.photo} alt="" />
                            </div>
                        </div>
                        <div className="post__topic">{post.tag}</div>
                    </div>

                    <div className="post__footer">
                        <div className="like">
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
                        <div className="view">
                            <i className="viewIcon">
                                <VisibilityIcon />
                            </i>
                            <span>View</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
